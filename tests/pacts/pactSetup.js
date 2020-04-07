import path from 'path'
import { Pact } from '@pact-foundation/pact'

global.port = 8080
global.provider = new Pact({
  port: global.port,
  consumer: 'Bookshelf',
  provider: 'BookAPI',
  dir: path.resolve(process.cwd(), 'tests/pacts/contracts'),
  log: path.resolve(
    process.cwd(),
    'tests/pacts/logs',
    'mockserver-integration.log'
  ),
  logLevel: 'warn',
  pactfileWriteMode: 'update',
})
