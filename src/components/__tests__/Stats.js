import React from 'react'
import { render, screen } from '@testing-library/react'
import Stats from '../Stats'

const playersData = [
  {
    id: 1,
    name: 'Abhishek',
    score: 4,
  },
  {
    id: 2,
    name: 'Aakash',
    score: 2,
  },
  {
    id: 3,
    name: 'Mohit',
    score: 1,
  },
]

test('Stats component shows the total score and total players', () => {
  //Act
  render(<Stats players={playersData} />)

  //Assert
  expect(screen.getByText('Players:')).toBeTruthy()
  expect(screen.getByTestId('total-players')).toHaveTextContent(3)
  expect(screen.getByText('Total Score:')).toBeTruthy()
  expect(screen.getByTestId('total-score')).toHaveTextContent(7)
})
