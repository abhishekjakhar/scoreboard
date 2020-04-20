import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../Header'

test('the value of title in header should be Scoreboard', () => {
  //Arrange
  const playersData = []

  //rendering the component with default title prop
  //Act
  const { rerender } = render(<Header players={playersData} />)
  //Assert
  expect(screen.getByTestId('title')).toHaveTextContent('Scoreboard')

  //re-render the same component with different title prop
  //Act
  rerender(<Header players={playersData} title="Playerboard" />)
  //Assert
  expect(screen.getByTestId('title')).toHaveTextContent('Playerboard')
})
