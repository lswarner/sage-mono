const CLIENT = localStorage.getItem('client')
const ENVIRONMENT = localStorage.getItem('environment')

export const client = CLIENT || 'k2bank'

export const environment = ENVIRONMENT || 'production'

export const cmURL = (() => {
  switch (environment) {
    case 'staging':
    case 'dev':
    case 'development':
      return 'https://k2cm.journey-staging.com'
    case 'local':
      return 'http://localhost:7777'
    default:
      return 'https://k2cm.journeyapis.com'
  }
})()
