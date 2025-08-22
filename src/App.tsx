// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import { Home, Services, Process, Portfolio, Contact } from './pages';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import WhatsAppButton from './components/WhatsappButton';
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}

export default App;
