const pact = require('@pact-foundation/pact-node')
const path = require('path')

const PACT_FILE = path.resolve(
  __dirname,
  '../tests/pacts/contracts/bookshelf-bookapi.json'
)

const server = pact.createStub({
  pactUrls: [PACT_FILE],
  port: 8080,
})
server.start().then(function() {
  console.info(`Mock server running on http://localhost:${8080}/api`)
  // Do your testing/development here
})
