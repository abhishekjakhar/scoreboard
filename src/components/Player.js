import React from 'react'
import Counter from './Counter'
import Icon from './Icon'

const Player = ({
  id,
  index,
  name,
  score,
  removePlayer,
  changeScore,
  isHighScore,
}) => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => removePlayer(id)}>
        ✖
      </button>
      <Icon isHighScore={isHighScore} />
      {name}
    </span>
    <Counter index={index} score={score} changeScore={changeScore} />
  </div>
)

export default Player
