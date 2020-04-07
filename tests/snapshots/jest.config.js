module.exports = {
  testMatch: ['**/snapshots/*.spec.js'],
  moduleNameMapper: {
    '\\.(css|scss|less|png|jpg|svg)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.stories\\.jsx?$': '@storybook/addon-storyshots/injectFileName',
    '^.+\\.jsx?$': 'babel-jest',
  },
}
