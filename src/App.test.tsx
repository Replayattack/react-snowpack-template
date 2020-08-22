import * as React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders react template with snowpack, typescript and tailwind css', () => {
  expect.hasAssertions()

  render(<App />)
  const headingElement = screen.getByRole('heading', {
    name: /react template with snowpack, typescript and tailwind css/i
  })

  expect(headingElement).toBeInTheDocument()
})
