import React, { useState, useEffect } from 'react'

const Stopwatch = () => {
  const [running, setRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [previousTime, setPreviousTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => tick(), 100)
    return () => clearInterval(interval)
  })

  const tick = () => {
    if (running) {
      const now = Date.now()
      setPreviousTime(now)
      setElapsedTime(elapsedTime + (now - previousTime))
    }
  }

  const handleStopwatch = () => {
    setRunning(!running)
    if (!running) {
      setPreviousTime(Date.now())
    }
  }

  const handleReset = () => {
    setElapsedTime(0)
  }

  console.log(elapsedTime)
  const seconds = Math.floor(elapsedTime / 1000)

  return (
    <div className="stopwatch">
      <h2 className="stopwatch-heading">Stopwatch</h2>
      <span className="stopwatch-time">{seconds}</span>
      <button onClick={handleStopwatch}>{running ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Stopwatch
