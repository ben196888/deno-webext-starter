// @deno-types="@types/webextension-polyfill"
import browser from 'webextension-polyfill'
import { onMessage } from 'webext-bridge/background'

// Listen for the extension being installed
browser.runtime.onInstalled.addListener(() => {
  console.log('Extension Installed!')
})

// Listen for messages from Popup and Content Script
onMessage('GREETINGS', ({ data }) => {
  console.log(`Received message from content script: ${data.message}`)
  return { message: 'Hello from the background script!' }
})
