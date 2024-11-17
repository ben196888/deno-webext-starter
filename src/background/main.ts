// @deno-types="@types/webextension-polyfill"
import browser from 'webextension-polyfill'

// Listen for the extension being installed
browser.runtime.onInstalled.addListener(() => {
  console.log('Extension Installed!')
})

// Listen for messages from the content script
browser.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === 'GREETINGS') {
    console.log(`Received message from content script: ${message.payload}`)
    sendResponse({ response: 'Hello from the background script!' })
  }
})
