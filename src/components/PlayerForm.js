import React, { useState } from 'react'
import PropTypes from 'prop-types'

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

PlayerForm.propTypes = {
  addPlayer: PropTypes.func.isRequired,
}

export default PlayerForm
