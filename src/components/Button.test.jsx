import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Button from './Button'

describe('Button', () => {
  it('render component Button', () => {
    render(<Button>Change name</Button>)
  })
})