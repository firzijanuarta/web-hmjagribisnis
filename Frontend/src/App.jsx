import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import dari react-router-dom
import Home from './pages/Home';
import Visimisi from './pages/Visimisi';  
import Struktur from './pages/Struktur';
import Divpengembangan from './pages/Divpengembangan';
import Divadvokasi from './pages/Divadvokasi';
import Divhulmas from './pages/Divhulmas';
import Divdanus from './pages/Divdanus';
import Divkominfo from './pages/Divkominfo';
import Divkaderisasi from './pages/Divkaderisasi';
import Divsekre from './pages/Divsekre';
import Kgt1 from './pages/Kgt1';
import Kgt2 from './pages/Kgt2';
import Kgt3 from './pages/Kgt3';
import Inf1 from './pages/Inf1';
import Inf2 from './pages/Inf2';
import Inf3 from './pages/Inf3';
import contact from './pages/contact'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Route untuk halaman Home */}
        <Route path="/" element={<Home />} />
        
        {/* Route untuk halaman Visi & Misi */}
        <Route path="/Visimisi" element={<Visimisi />} />
        <Route path="/Struktur" element={<Struktur />} />
        <Route path="/Divpengembangan" element={<Divpengembangan />} />
        <Route path="/Divadvokasi" element={<Divadvokasi />} />
        <Route path="/Divhulmas" element={<Divhulmas />} />
        <Route path="/Divdanus" element={<Divdanus />} />
        <Route path="/Divkominfo" element={<Divkominfo />} />
        <Route path="/Divkaderisasi" element={<Divkaderisasi />} />
        <Route path="/Divsekre" element={<Divsekre />} />
        <Route path="/Kgt1" element={<Kgt1 />} />
        <Route path="/Kgt2" element={<Kgt2 />} />
        <Route path="/Kgt3" element={<Kgt3 />} />
        <Route path="/Inf1" element={<Inf1 />} />
        <Route path="/Inf2" element={<Inf2 />} />
        <Route path="/Inf3" element={<Inf3 />} />
        <Route path="/contact" element={<contact />} />
        
      </Routes>
    </Router>
  );
}

export default App;