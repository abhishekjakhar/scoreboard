import React from 'react'
import { render, screen } from '@testing-library/react'
import Stats from '../Stats'

test('Stats component shows the total score and total players', () => {
  //Arrange
  const playersData = [
    {
      id: 1,
      name: 'Abhishek',
      score: 3,
    },
    {
      id: 2,
      name: 'Aakash',
      score: 2,
    },
  ]

  //Act
  render(<Stats players={playersData} />)

  //Assert
  expect(screen.getByText('Players:')).toBeTruthy()
  expect(screen.getByTestId('total-players')).toHaveTextContent(2)
  expect(screen.getByText('Total Score:')).toBeTruthy()
  expect(screen.getByTestId('total-score')).toHaveTextContent(5)
})
