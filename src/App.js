import React from 'react'
import Header from './components/Header'
import Player from './components/Player'
import PlayerForm from './components/PlayerForm'
import './App.css'

function App() {
  return (
    <div className="scoreboard">
      <Header />
      <Player />
      <PlayerForm />
    </div>
  )
}

export default App
