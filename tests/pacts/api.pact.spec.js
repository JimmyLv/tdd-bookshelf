import { like, somethingLike } from '@pact-foundation/pact/dsl/matchers'
import { anotherBookContent, bookContent } from '../../src/fixtures/book'
import * as API from '../../src/services/book'

test('getting all books', async () => {
  // Given: set up Pact interactions
  await provider.addInteraction({
    state: 'books exist',
    uponReceiving: 'get all books',
    withRequest: {
      method: 'GET',
      path: '/api/books',
    },
    willRespondWith: {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: like([
        somethingLike(bookContent),
        somethingLike(anotherBookContent),
      ]),
    },
  })

  // When: make request to Pact mock server
  const response = await API.getAllBooks()

  // Then: verify the response data and status
  expect(response.data).toStrictEqual([bookContent, anotherBookContent])
  expect(response.status).toEqual(200)
})

test('getting one book', async () => {
  // Given: set up Pact interactions
  await provider.addInteraction({
    state: 'book with ID 10 exists',
    uponReceiving: 'get book with ID 10',
    withRequest: {
      method: 'GET',
      path: '/api/books/10',
    },
    willRespondWith: {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: like(bookContent),
    },
  })

  // When: make request to Pact mock server
  const response = await API.getBook(10)

  // Then: verify the response data and status
  expect(response.data).toStrictEqual(bookContent)
  expect(response.status).toEqual(200)
})
