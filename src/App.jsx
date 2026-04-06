import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import AppRoutes from './routes/AppRoutes';
import SEO from './components/SEO';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <SEO />
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
