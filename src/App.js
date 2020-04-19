import React, { useState } from 'react'
import Header from './components/Header'
import Player from './components/Player'
import PlayerForm from './components/PlayerForm'
import './App.css'

const initialPlayers = [
  {
    id: 1,
    name: 'Abhishek',
    score: 0,
  },
  {
    id: 2,
    name: 'Aakash',
    score: 0,
  },
  {
    id: 3,
    name: 'Vinay',
    score: 0,
  },
  {
    id: 4,
    name: 'Mohit',
    score: 0,
  },
]

function App() {
  const [players, setPlayers] = useState(initialPlayers)

  return (
    <div className="scoreboard">
      <Header />
      {players.map((p) => (
        <Player key={p.id} id={p.id} name={p.name} score={p.score} />
      ))}
      <PlayerForm />
    </div>
  )
}

export default App
