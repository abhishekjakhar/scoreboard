import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import PlayerForm from '../PlayerForm'

test('renders the PlayerForm & sets the value of input to the value entered by user', () => {
  //Arrange
  const handleAddPlayer = jest.fn()

  //Act
  render(<PlayerForm addPlayer={handleAddPlayer} />)
  const playerInput = screen.getByPlaceholderText(/player/i)
  const name = 'Vaishnavi'
  fireEvent.change(playerInput, { target: { value: name } })

  //Assert
  expect(playerInput.value).toEqual(name)
})
