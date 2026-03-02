const path = require("path");
const fs = require("fs/promises");
const fastify = require("fastify")({ logger: true });


const DATA_PATH = path.join(__dirname, "data", "blogposts.json");

let db = { blogPosts: [] };

async function loadDb() {
    const raw = await fs.readFile(DATA_PATH, "utf-8");
    db = JSON.parse(raw);
    if (!db || !Array.isArray(db.blogPosts)) db = { blogPosts: [] };
}

async function saveDb() {
    // hübsch formatiert speichern
    await fs.writeFile(DATA_PATH, JSON.stringify(db, null, 2), "utf-8");
}

function nextId() {
    const ids = db.blogPosts.map(p => Number(p.id)).filter(Number.isFinite);
    return ids.length ? Math.max(...ids) + 1 : 1;
}

// --- Routes ---

fastify.get("/health", async () => ({ ok: true }));

// alle Posts
fastify.get("/posts", async () => db.blogPosts);

// einzelner Post
fastify.get("/posts/:id", async (req, reply) => {
    const id = Number(req.params.id);
    const post = db.blogPosts.find(p => Number(p.id) === id);
    if (!post) return reply.code(404).send({ error: "Not found" });
    return post;
});

// neuen Post erstellen
fastify.post("/posts", async (req, reply) => {
    const { title, description, content, ts } = req.body || {};

    if (!title || !content || !description || !ts) {
        return reply.code(400).send({
            error: "title, description, content und ts sind erforderlich"
        });
    }

    const post = { id: nextId(), title, description, content, ts };
    db.blogPosts.push(post);
    await saveDb();

    return reply.code(201).send(post);
});

// Post aktualisieren (partial update)
fastify.patch("/posts/:id", async (req, reply) => {
    const id = Number(req.params.id);
    const idx = db.blogPosts.findIndex(p => Number(p.id) === id);
    if (idx === -1) return reply.code(404).send({ error: "Not found" });

    const patch = req.body || {};
    db.blogPosts[idx] = { ...db.blogPosts[idx], ...patch, id: db.blogPosts[idx].id };
    await saveDb();

    return db.blogPosts[idx];
});

// löschen
fastify.delete("/posts/:id", async (req, reply) => {
    const id = Number(req.params.id);
    const before = db.blogPosts.length;
    db.blogPosts = db.blogPosts.filter(p => Number(p.id) !== id);

    if (db.blogPosts.length === before) {
        return reply.code(404).send({ error: "Not found" });
    }

    await saveDb();
    return reply.code(204).send();
});

// --- Start ---
async function start() {
    await loadDb();

    await fastify.register(require("@fastify/cors"), {
        origin: true // erlaubt alle Origins
    });

    // falls du JSON Requests schickst:
    // fastify hat JSON parsing automatisch, kein extra middleware nötig

    await fastify.listen({ port: 3333, host: "0.0.0.0" });
}

start().catch(err => {
    fastify.log.error(err);
    process.exit(1);
});