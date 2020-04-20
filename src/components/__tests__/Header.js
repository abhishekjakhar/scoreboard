import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../Header'

const mockPlayers = []

test('the value of title in header should be Scoreboard', () => {
  const { rerender } = render(<Header players={mockPlayers} />)
  //rendering the component with default title prop
  expect(screen.getByTestId('title')).toHaveTextContent('Scoreboard')

  //re-render the same component with different title prop
  rerender(<Header players={mockPlayers} title="Playerboard" />)
  expect(screen.getByTestId('title')).toHaveTextContent('Playerboard')
})
