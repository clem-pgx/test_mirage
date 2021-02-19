import './App.css';
import React, { useState, useEffect } from "react"
import { createServer } from "miragejs"

let server = createServer()
server.get("/api/users", { users: [{ id: 1, name: "Bob" }] })

export default function App() {
  let [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.users)
      })
  }, [])

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}