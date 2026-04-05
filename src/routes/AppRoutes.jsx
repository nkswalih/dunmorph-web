import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import ScrollToTop from '../components/ScrollToTop';
import HomePage from '../pages/Home';
import CollectionPage from '../pages/Collection';
import ProductDetailPage from '../pages/ProductDetail';
import LoginPage from '../pages/Auth/Login';
import RegisterPage from '../pages/Auth/Register';
import ComingSoonPage from '../pages/ComingSoon';
import CartPage from '../pages/Cart';
import AboutPage from '../pages/About';
import ContactPage from '../pages/Contact';

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/men" element={<Layout><CollectionPage /></Layout>} />
        <Route path="/accessories" element={<Layout><CollectionPage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/product/:id" element={<Layout><ProductDetailPage /></Layout>} />
        <Route path="/cart" element={<Layout><CartPage /></Layout>} />
        <Route path="/login" element={<Layout><LoginPage /></Layout>} />
        <Route path="/register" element={<Layout><RegisterPage /></Layout>} />
        <Route path="/women" element={<Layout><ComingSoonPage /></Layout>} />
        <Route path="/watches" element={<Layout><ComingSoonPage /></Layout>} />
      </Routes>
    </>
  );
};

export default AppRoutes;
