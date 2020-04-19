import React from 'react'

const Stats = ({ players }) => {
  const totalPlayers = players.length
  const totalScore = players.reduce((total, player) => {
    return total + player.score
  }, 0)
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Score:</td>
          <td>{totalScore}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Stats
