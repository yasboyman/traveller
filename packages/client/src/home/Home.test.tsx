import { render } from '../test-utils'
import { BrowserRouter } from 'react-router-dom'
import { Home } from './Home'
import { queryByTestId, screen } from "@testing-library/react";
import React from 'react'

describe('<home /> component', () => {
  it('renders the screen', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    const HeadingComponent = screen.getByTestId('input-value')
    expect(HeadingComponent).toBeInTheDocument()
  })
})
