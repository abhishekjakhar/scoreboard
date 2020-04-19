import React, { useState } from 'react'
import Header from './components/Header'
import Player from './components/Player'
import PlayerForm from './components/PlayerForm'

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

  const getHighScore = () => {
    const scores = players.map((p) => p.score)
    const highScore = Math.max(...scores)
    if (highScore) {
      return highScore
    }
    return null
  }

  const handleScoreChange = (index, delta) => {
    const updatedPlayers = [...players]
    const updatedPlayer = { ...updatedPlayers[index] }
    updatedPlayer.score += delta
    updatedPlayers[index] = updatedPlayer
    setPlayers(updatedPlayers)
  }

  const handleRemovePlayer = (id) => {
    setPlayers([...players.filter((p) => p.id !== id)])
  }

  const handleAddPlayer = (name) => {
    setPlayers([...players, { name, score: 0, id: players.length + 1 }])
  }

  const highScore = getHighScore()

  return (
    <div className="scoreboard">
      <Header players={players} title="Scoreboard" />
      {players.map((p, index) => (
        <Player
          key={p.id}
          id={p.id}
          index={index}
          name={p.name}
          score={p.score}
          removePlayer={handleRemovePlayer}
          changeScore={handleScoreChange}
          isHighScore={highScore === p.score}
        />
      ))}
      <PlayerForm addPlayer={handleAddPlayer} />
    </div>
  )
}

export default App
