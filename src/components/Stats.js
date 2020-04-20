import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const Stats = ({ players }) => {
  const totalPlayers = players.length
  const totalScore = players.reduce((total, player) => {
    return total + player.score
  }, 0)

  useEffect(() => {
    document.title = `Total Score: ${totalScore}`
  }, [totalScore])

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td data-testid="total-players">{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Score:</td>
          <td data-testid="total-score">{totalScore}</td>
        </tr>
      </tbody>
    </table>
  )
}

Stats.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.number,
    }),
  ).isRequired,
}

export default Stats
