import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './router';
import CartProvider from './context/CartContext';
import Condicional from './components/Condicional';

function App() {
  return (
    <div className="App">
      {/* <CartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartProvider> */}
      <Condicional />
    </div>
  );
}

export default App;
