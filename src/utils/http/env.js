import packageJSON from '../../../package.json'

export const isLocal = process.env.NODE_ENV !== 'production'

export function getBaseApiUrl() {
  if (isLocal) {
    return `${packageJSON.proxy}/api`
  }

  return `/api`
}
