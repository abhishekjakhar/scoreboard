import React, { useState } from 'react'

const PlayerForm = ({ addPlayer }) => {
  const [player, setPlayer] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addPlayer(player)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={player}
        type="text"
        name="player"
        placeholder="Enter a player's name"
        onChange={(e) => setPlayer(e.target.value)}
      />
      <input type="submit" value="Add Player" />
    </form>
  )
}

export default PlayerForm
