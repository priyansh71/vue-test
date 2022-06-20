/* eslint-disable no-console */

import { register } from 'register-service-worker'
// let NODE_ENV
const NODE_ENV = 'production'
const BASE_URL = 'https://priyansh71.github.io/vue-test/'
const LOCAL_URL = 'http://localhost:3000/vue-test/'

if(NODE_ENV === 'production') URL = BASE_URL
else URL = LOCAL_URL

if (NODE_ENV === 'production') {
  register(`${URL}service-worker.js`, {
    ready () {
      console.log('Site is ready')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; Refresh...')
      setTimeout(() => {
        window.location.reload(true)
      }, 1000)
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    },
  })
}