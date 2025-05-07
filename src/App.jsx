// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Layout/ScrollToTop'; // Add this import
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'; 
import Divisions from './pages/Divisions';
import Achievements from './pages/Achievements';
import BukuPutih from './pages/BukuPutih';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add this component here */}
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/divisions" element={<Divisions />} />
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