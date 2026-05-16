import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AppDetailsPage from './pages/AppDetailsPage';
import ContactPage from './pages/ContactPage';
import SupportPage from './pages/SupportPage';
import './index.css';

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"            element={<HomePage />} />
            <Route path="/about"       element={<AboutPage />} />
            <Route path="/app-details" element={<AppDetailsPage />} />
            <Route path="/contact"     element={<ContactPage />} />
            <Route path="/support"     element={<SupportPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
