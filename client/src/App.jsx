// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";
import Board from "./components/Board";

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

      <Board members={members} />
    </main>
  );
}

export default App;
