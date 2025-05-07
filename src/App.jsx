// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Layout/ScrollToTop';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'; 
import Divisions from './pages/Divisions';
import DivisionDetail from './pages/DivisionDetail'; // Tambahkan import ini
import Achievements from './pages/Achievements';
import BukuPutih from './pages/BukuPutih';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/divisions" element={<Divisions />} />
            <Route path="/divisions/:divisionId" element={<DivisionDetail />} /> {/* Tambahkan route ini */}
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/buku-putih" element={<BukuPutih />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;