import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import ScrollToTop from '../components/ScrollToTop';
import HomePage from '../pages/Home';
import CollectionPage from '../pages/Collection';
import WomenCollectionPage from '../pages/Collection/WomenCollection';
import AccessoriesPage from '../pages/Accessories';
import ProductDetailPage from '../pages/ProductDetail';
import LoginPage from '../pages/Auth/Login';
import RegisterPage from '../pages/Auth/Register';
import CartPage from '../pages/Cart';
import AboutPage from '../pages/About';
import ContactPage from '../pages/Contact';
import SizeChartPage from '../pages/SizeChart';
import TermsAndConditionsPage from '../pages/TermsAndConditions';
import ShippingReturnsPage from '../pages/ShippingReturns';
import CareInstructionsPage from '../pages/CareInstructions';
import PrivacyPolicyPage from '../pages/PrivacyPolicy';
import CookiePolicyPage from '../pages/CookiePolicy';

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/men" element={<Layout><CollectionPage /></Layout>} />
        <Route path="/women" element={<Layout><WomenCollectionPage /></Layout>} />
        <Route path="/accessories" element={<Layout><AccessoriesPage /></Layout>} />
        <Route path="/product/:id" element={<Layout><ProductDetailPage /></Layout>} />
        <Route path="/cart" element={<Layout><CartPage /></Layout>} />
        <Route path="/login" element={<Layout><LoginPage /></Layout>} />
        <Route path="/register" element={<Layout><RegisterPage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/size-chart" element={<Layout><SizeChartPage /></Layout>} />
        <Route path="/terms-and-conditions" element={<Layout><TermsAndConditionsPage /></Layout>} />
        <Route path="/shipping-and-returns" element={<Layout><ShippingReturnsPage /></Layout>} />
        <Route path="/care-instructions" element={<Layout><CareInstructionsPage /></Layout>} />
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicyPage /></Layout>} />
        <Route path="/cookie-policy" element={<Layout><CookiePolicyPage /></Layout>} />
      </Routes>
    </>
  );
};

export default AppRoutes;
