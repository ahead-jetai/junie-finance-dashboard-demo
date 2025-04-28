import React from 'react'
import { ThemeProvider } from 'styled-components'
import Dashboard from './components/Dashboard/Dashboard'
import { theme, GlobalStyle } from './theme'
import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
