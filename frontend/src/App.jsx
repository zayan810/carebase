import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('http://127.0.0.1:8000')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Failed to load message'))
  }, [])

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to carebase:</h1>
      <p>{message}</p>
    </div>
  )
}

export default App
