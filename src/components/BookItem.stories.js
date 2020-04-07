import React from 'react'
import { bookContent } from '../fixtures/book'
import { BookItem } from './BookItem'

export default {
  title: 'BookItem',
}

export function simpleBook() {
  return (
    <div style={{ maxWidth: 300 }}>
      <BookItem book={bookContent} />
    </div>
  )
}
