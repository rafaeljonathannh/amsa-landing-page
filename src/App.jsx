// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import AboutUs from './pages/AboutUs';
import Divisions from './pages/Divisions';
import Achievements from './pages/Achievements';
import BukuPutih from './pages/BukuPutih';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
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