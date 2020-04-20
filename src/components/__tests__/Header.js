import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../Header'

const mockPlayers = []

test('the value of title in header should be Scoreboard', () => {
  //rendering the component with default title prop
  //Act
  const { rerender } = render(<Header players={mockPlayers} />)
  //Assert
  expect(screen.getByTestId('title')).toHaveTextContent('Scoreboard')

  //re-render the same component with different title prop
  //Act
  rerender(<Header players={mockPlayers} title="Playerboard" />)
  //Assert
  expect(screen.getByTestId('title')).toHaveTextContent('Playerboard')
})
