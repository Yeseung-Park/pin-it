import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/common/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="bg-background font-pretendard text-text-main min-h-screen w-full">
        <Header />
        <main className="p-8">
          <h2>main 화면</h2>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
