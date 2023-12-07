import { useState } from 'react'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#ECECEC] flex justify-center'>
      <div className=' w-full max-w-7xl min-[1440px]:max-w-[1360px]'>
        <Navbar />
      </div>
    </div>
  )
}

export default App
