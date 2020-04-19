import React from 'react'

const Counter = () => {
  return (
    <div className="counter">
      <button className="counter-action counter-decrement"> - </button>
      <span className="counter-score">100</span>
      <button className="counter-action counter-increment"> + </button>
    </div>
  )
}

export default Counter
