import * as React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  expect.hasAssertions()

  const { getByRole } = render(<App />)
  const headingElement = getByRole('heading', {
    name: /react template with snowpack, typescript and tailwind css/i
  })

  expect(headingElement).toBeInTheDocument()
})
