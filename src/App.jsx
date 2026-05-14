import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import PageDetail from './pages/PageDetail'
import ThemeProvider from './assets/hooks/useTheme'
import ThemeToggle from './assets/components/ThemeToggle'
import './App.css'

function App() {
  return<>
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/project/:id" element={<PageDetail />}/>
      </Routes>
        <ThemeToggle />
    </ThemeProvider>
  </>
}

export default App
