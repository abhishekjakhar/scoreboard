import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Player from '../Player'

test('renders the individual player ', () => {
  //Arrange
  const handleRemovePlayer = jest.fn()
  const handleScoreChange = jest.fn()

  //Act
  render(
    <Player
      id={1}
      index={0}
      name="Abhishek"
      score={3}
      removePlayer={handleRemovePlayer}
      changeScore={handleScoreChange}
      isHighScore={true}
    />,
  )

  //Act
  fireEvent.click(screen.getByTestId('button-remove-player'))
  //Assert
  expect(screen.getByText('Abhishek')).toBeTruthy()
  expect(handleRemovePlayer).toHaveBeenCalledTimes(1)
})
