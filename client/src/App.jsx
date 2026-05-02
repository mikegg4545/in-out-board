// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";

const members = [
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
];

function App() {
  return (
    <main className="app">
      <header className="page-header">
        <h1>In-Out Board</h1>
        <p>Alpha Company • Live Status Board</p>
      </header>

      <section className="board">
        <div className="board-header">Members</div>
        <div className="board-header in-header">In</div>
        <div className="board-header out-header">Out</div>

        {members.map((member) => (
          <div className="board-row" key={member.id}>
            <div className="member-cell">
              <strong>{member.name}</strong>
              <span>{member.rank}</span>
            </div>

            <div className="status-cell">
              {member.status === "in" && (
                <div className="status-card in-card">{member.details}</div>
              )}
            </div>

            <div className="status-cell">
              {member.status === "out" && (
                <div className="status-card out-card">{member.details}</div>
              )}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
