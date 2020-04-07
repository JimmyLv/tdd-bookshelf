module.exports = {
  testMatch: ['**/pacts/*.spec.js'],
  moduleNameMapper: {
    '\\.(css|scss|less|png|jpg|svg)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  setupFiles: ['./pactSetup.js'],
  setupFilesAfterEnv: ['./pactTestWrapper.js'],
}
