import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Offers from './pages/Offers'
function App() {

  return (
    <div className='App'>
      <Navbar />
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/offers' element={<Offers />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  )
}

export default App
