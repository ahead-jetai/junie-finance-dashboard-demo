import React from 'react'
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from 'styled-components'
import Dashboard from './components/Dashboard/Dashboard'
import { theme, GlobalStyle } from './theme'
import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Analytics/>
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
