import './App.css'
// @deno-types="@types/react"
import { useState } from 'react'
// @ts-expect-error Unable to infer type at the moment
import reactLogo from '../assets/react.svg'
// @deno-types="@types/webextension-polyfill"
import browser from 'webextension-polyfill'
import { sendMessage } from 'webext-bridge/popup'

function App({ pageName }: { pageName: string }) {
  const [message, setMessage] = useState('')
  const sendGreeting = () => {
    sendMessage('GREETINGS', { message: 'Hello from the popup!' }, 'background').then((response) => {
      setMessage(response.message)
    })
  }
  const openOptionsPage = () => {
    browser.runtime.openOptionsPage()
  }
  return (
    <>
      <div>
        <a href='https://deno.land' target='_blank'>
          <img src='/vite-deno.svg' alt='Vite with Deno' />
        </a>
        <a href='https://vite.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Deno + Vite + React</h1>
      <h2>{pageName}</h2>
      <div className='card'>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR (TBD)
        </p>
        {message && (
          <p>
            Response message from background: {message}
          </p>
        )}
      </div>
      <button onClick={sendGreeting}>Send Greeting to background</button>
      <button onClick={openOptionsPage}>Open Options Page</button>
      <p className='read-the-docs'>
        Click on the Deno, Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
