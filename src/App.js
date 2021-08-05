import './index.css'
import Components from './Pages/Components'
import Index from './Pages/Index'
import About from './Pages/About'
import Navbar from './components/Navbar'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/components' element={<Components />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}
