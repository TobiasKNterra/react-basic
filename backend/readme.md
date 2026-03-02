# 📘 Blog Webservice (Fastify)

![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![Fastify](https://img.shields.io/badge/Fastify-4.x-black)
![License](https://img.shields.io/badge/License-MIT-blue)

Ein schlanker REST-Webservice mit **Fastify**, der Blogposts aus einer JSON-Datei liest und speichert.  
Die JSON-Datei dient als einfache Persistenz – keine externe Datenbank erforderlich.

---

## 🚀 Quick Start

### 1️⃣ Abhängigkeiten installieren

```bash
npm install
```

### 2️⃣ Server starten

```bash
node server.js
```

Der Server läuft anschließend unter:

```
http://localhost:3333
```

---

## 📦 Voraussetzungen

- Node.js 18 oder höher
- npm

---

## 📁 Projektstruktur

```
project/
│
├── server.js
├── package.json
└── data/
    └── blogposts.json
```

⚠️ Stelle sicher, dass `data/blogposts.json` existiert.

---

## 🗂 Datenstruktur

Beispiel `blogposts.json`:

```json
{
  "blogPosts": [
    {
      "id": 1,
      "title": "Beispiel",
      "description": "Kurzbeschreibung",
      "content": "Inhalt...",
      "ts": "14.03.2024, 12:00"
    }
  ]
}
```

---

## 🌐 API Übersicht

| Methode | Endpoint        | Beschreibung                |
|----------|-----------------|-----------------------------|
| GET      | `/health`       | Healthcheck                 |
| GET      | `/posts`        | Alle Blogposts abrufen      |
| GET      | `/posts/:id`    | Einzelnen Post abrufen      |
| POST     | `/posts`        | Neuen Post erstellen        |
| PATCH    | `/posts/:id`    | Post aktualisieren          |
| DELETE   | `/posts/:id`    | Post löschen                |

---

## 📝 Beispiel Request (POST)

```json
{
  "title": "Neuer Beitrag",
  "description": "Kurzbeschreibung",
  "content": "Langer Text...",
  "ts": "02.03.2026, 10:30"
}
```

---

## 🔒 CORS

CORS wird über `@fastify/cors` konfiguriert und erlaubt definierte Origins  
(z.B. React Frontend).

---

## ⚙️ Technischer Hintergrund

- Framework: **Fastify**
- Persistenz: **Dateibasierte JSON-Speicherung**
- ID-Vergabe: Automatisch inkrementierend
- Speicherung: Datei wird bei Änderungen überschrieben

Diese Lösung eignet sich ideal für:
- Lernprojekte
- Prototypen
- Kleine interne Tools
