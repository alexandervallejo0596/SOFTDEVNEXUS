
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import WhatsAppButton from './components/WhatsappButton';
import ScrollToTop from './components/scrollToTop';
import Loading from './components/Loading';

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const Process = lazy(() => import('./pages/Process').then(module => ({ default: module.Process })));
const Portfolio = lazy(() => import('./pages/Portfolio').then(module => ({ default: module.Portfolio })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));

function App() {

  return (
    <>
      <ScrollToTop />
      <div class="min-h-screen bg-white">
        <Navigation />
        <main class="pt-16">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/process" element={<Process />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}

export default App;
