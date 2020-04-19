import React from 'react'
import Counter from './Counter'
import Icon from './Icon'

const Player = () => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player">✖</button>
      <Icon />
      Name
    </span>
    <Counter />
  </div>
)

export default Player
