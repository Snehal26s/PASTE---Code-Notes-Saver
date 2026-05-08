import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Pastes from './pages/Pastes'
import ViewPaste from './Pages/ViewPaste'

import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>

      <div className='min-h-screen bg-[#0d1117] text-white'>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pastes' element={<Pastes />} />
          <Route path='/paste/:id' element={<ViewPaste />} />
        </Routes>

        <Toaster />

      </div>

    </BrowserRouter>
  )
}

export default App