import { useEffect, useState } from "react";
import { getUsers, createUser } from "./api";

function App() {
  const [users, setUsers] = useState([]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const cargar = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  const guardar = async () => {
    await createUser({ name, email });
    setNombre("");
    setEmail("");
    cargar();
  };

  useEffect(() => {
    cargar();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Usuarios</h1>

      <input
        className="border p-2 mr-2"
        placeholder="name"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        className="border p-2 mr-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={guardar}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Guardar
      </button>

      <ul className="mt-4">
        {users.map((u) => (
          <li key={u.id} className="border p-2 mt-2">
            {u.name} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
