import { sendMessage } from 'webext-bridge/content-script'

// Send a message to the background script when the page is loaded
globalThis.addEventListener('load', async () => {
  const response = await sendMessage('GREETINGS', { message: 'Hello from the content script!' })

  console.log(`Received response from background script: ${response.message}`)
})
