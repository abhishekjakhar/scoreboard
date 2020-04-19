import React from 'react'
import Counter from './Counter'

const Player = () => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player">✖</button>
      Name
    </span>

    <Counter />
  </div>
)

export default Player
