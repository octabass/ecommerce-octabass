import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:cid' element={<ItemListContainer />} />
            <Route path='/detalle/:pid' element={<ItemDetailContainer />} />  
            <Route path='/cart' element={<CartContainer />} />     
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
