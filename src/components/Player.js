import React from 'react'
import Counter from './Counter'
import Icon from './Icon'

const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player">✖</button>
      <Icon />
      {props.name}
    </span>
    <Counter />
  </div>
)

export default Player
