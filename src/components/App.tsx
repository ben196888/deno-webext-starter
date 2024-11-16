import './App.css'
// @ts-expect-error Unable to infer type at the moment
import reactLogo from '../assets/react.svg'
// @deno-types="@types/webextension-polyfill"
import browser from 'webextension-polyfill'

function App({ pageName }: { pageName: string }) {
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
      </div>
      <button onClick={openOptionsPage}>Open Options Page</button>
      <p className='read-the-docs'>
        Click on the Deno, Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
