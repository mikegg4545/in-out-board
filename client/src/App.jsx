import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [members, setMembers] = useState([
    {
      id: "1",
      name: "Garza, Joseph",
      rank: "SSG",
      status: "in",
      details: "Server Room",
    },
    {
      id: "2",
      name: "Smith, Lucas",
      rank: "SGT",
      status: "out",
      details: "Appointment",
    },
    {
      id: "3",
      name: "Johnson, Mark",
      rank: "CPL",
      status: "in",
      details: "Office",
    },
  ]);

  function toggleStatus(memberId) {
    const updatedMembers = members.map((member) => {
      if (member.id === memberId) {
        return {
          ...member,
          status: member.status === "in" ? "out" : "in",
        };
      }
      return member;
    });

    setMembers(updatedMembers);
  }

  return (
    <main className="app">
      <header className="page-header">
        <h1>In-Out Board</h1>
        <p>Alpha Company • Live Status Board</p>
      </header>

      <Board members={members} onToggleStatus={toggleStatus} />
    </main>
  );
}

export default App;
