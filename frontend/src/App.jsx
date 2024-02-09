import Navbar from '../components/Navbar/Navbar';
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
      </Routes>

    </BrowserRouter>
  )
}

export default App
