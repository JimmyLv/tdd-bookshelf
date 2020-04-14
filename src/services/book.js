import { books, bookContent } from '../fixtures/book'
import http from '../utils/http'
import { isProduction } from '../utils/http/env'

export async function getBook(id) {
  if (isProduction) {
    return bookContent
  }
  return await http.get(`/books/${id}`)
}

export async function getAllBooks() {
  if (isProduction) {
    return { data: books }
  }
  return await http.get(`/books`)
}
