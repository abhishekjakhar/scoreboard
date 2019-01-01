import React from 'react'
import PropTypes from 'prop-types'
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
      <button
        className="remove-player"
        data-testid="button-remove-player"
        onClick={() => removePlayer(id)}
      >
        &#10006;
      </button>
      <Icon isHighScore={isHighScore} />
      {name}
    </span>
    <Counter index={index} score={score} changeScore={changeScore} />
  </div>
)

Player.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  removePlayer: PropTypes.func.isRequired,
  changeScore: PropTypes.func.isRequired,
  isHighScore: PropTypes.bool.isRequired,
}

export default Player
