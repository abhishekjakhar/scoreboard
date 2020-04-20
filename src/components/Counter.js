import React from 'react'
import PropTypes from 'prop-types'

const Counter = ({ index, score, changeScore }) => {
  return (
    <div className="counter">
      <button
        data-testid="button-decrement"
        className="counter-action counter-decrement"
        onClick={() => changeScore(index, -1)}
      >
        -
      </button>
      <span className="counter-score">{score}</span>
      <button
        data-testid="button-increment"
        className="counter-action counter-increment"
        onClick={() => changeScore(index, 1)}
      >
        &#43;
      </button>
    </div>
  )
}

Counter.propTypes = {
  index: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  changeScore: PropTypes.func.isRequired,
}

export default Counter
