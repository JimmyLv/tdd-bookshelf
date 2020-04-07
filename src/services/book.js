import http from '../utils/http'

export async function getBook(id) {
  return await http.get(`/books/${id}`)
}

export async function getAllBooks() {
  return await http.get(`/books`)
}
