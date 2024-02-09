import Navbar from '../components/Navbar/Navbar';
import Signup from '../components/Signup/Signup';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='product/:id' element={<ProductDetails />} />
        <Route path='signup' element={<Signup />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
