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

  const handleScoreChange = (index, delta) => {
    const updatedPlayers = [...players]
    const updatedPlayer = { ...updatedPlayers[index] }
    updatedPlayer.score += delta
    updatedPlayers[index] = updatedPlayer
    setPlayers(updatedPlayers)
  }

  return (
    <div className="scoreboard">
      <Header />
      {players.map((p, index) => (
        <Player
          key={p.id}
          id={p.id}
          index={index}
          name={p.name}
          score={p.score}
          changeScore={handleScoreChange}
        />
      ))}
      <PlayerForm />
    </div>
  )
}

export default App
