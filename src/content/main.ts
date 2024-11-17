// @deno-types="@types/webextension-polyfill"
import browser from 'webextension-polyfill'

// Send a message to the background script when the page is loaded
globalThis.addEventListener('load', () => {
  browser.runtime.sendMessage({
    type: 'GREETINGS',
    payload: 'Hello from the content script!',
  })
    .then((response) => {
      console.log(
        `Received response from background script: ${response.response}`,
      )
    })
    .catch((error) => {
      console.error(`Error sending message to background script: ${error}`)
    })
})
