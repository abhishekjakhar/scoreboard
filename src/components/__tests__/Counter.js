import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Counter from '../Counter'

test('Counter component shows the score, increment and decrement button', () => {
  //Arrange
  const handleScoreChange = jest.fn()

  //Act
  render(<Counter score={4} index={1} changeScore={handleScoreChange} />)
  //Assert
  expect(screen.getByText('4')).toBeTruthy()

  //Act
  fireEvent.click(screen.getByTestId('button-decrement'))
  //Assert
  expect(handleScoreChange).toHaveBeenCalledTimes(1)

  //Act
  fireEvent.click(screen.getByTestId('button-increment'))
  //Assert
  expect(handleScoreChange).toHaveBeenCalledTimes(2)
})
