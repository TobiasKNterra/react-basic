import { useState } from "react";
import "./App.css";
import UserForm from "./UserForm";

interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: "Schneider" },
  { id: 2, name: "Spilker" },
  { id: 3, name: "Moisel" },
];

function App() {
  const [choosenUser, setChoosenUser] = useState<User>();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <select
        value={choosenUser?.id}
        onChange={(e) =>
          setChoosenUser(
            users.filter((user) => user.id === Number(e.target.value))[0]
          )
        }
      >
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <UserForm name={choosenUser?.name} />
    </div>
  );
}

export default App;
