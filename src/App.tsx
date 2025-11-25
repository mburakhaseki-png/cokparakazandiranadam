import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { KVKK } from './pages/KVKK';
import { CookiePolicy } from './pages/CookiePolicy';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="bg-[#050505] min-h-screen text-white selection:bg-purple-500 selection:text-white flex flex-col">
        <div className="bg-noise" />
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kvkk" element={<KVKK />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
