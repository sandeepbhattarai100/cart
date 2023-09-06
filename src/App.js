
import { Container } from '@mui/material';
import './App.css';
import Homepage from './page/homepage/Homepage';
import CartPage from './page/CartPage';
import NavBar from './component/NavBar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>


      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path='/' element={<Homepage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>


      </BrowserRouter>

    </>
  );
}

export default App;
