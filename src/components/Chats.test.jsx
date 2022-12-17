import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import ChatList from './Chats'

describe('ChatList', () => {
    it('render component ChatList', () => {
      render(<ChatList chatsList='1' />)
    })
})