import './index.css'
// @deno-types="@types/react"
import { StrictMode } from 'react'
// @deno-types="@types/react-dom/client"
import { createRoot } from 'react-dom/client'

export const renderComponent = (
  htmlElementId: string,
  renderableElement: JSX.Element,
) => {
  createRoot(document.getElementById(htmlElementId) as HTMLElement).render(
    <StrictMode>
      {renderableElement}
    </StrictMode>,
  )
}
