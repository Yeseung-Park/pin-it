import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/common/Header'

function App() {
  return (
    <BrowserRouter>
      <div className="font-pretendard text-text-main min-h-screen w-full">
        <Header />
        <main className="p-8">
          <h2>main 화면</h2>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
