import { useEffect } from 'react';
import { useLocation, BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { initGA, sendPageView } from './analytics';

// Importación de componentes
import Home from './componentes/Home';
import Footer from './componentes/footer/Footer';
import About from './componentes/about/About';
import Ocupacion from './componentes/ocupacion/Ocupacion';
import Testimonios from './componentes/testimonios/Testimonios';
import Slider2 from './componentes/slider2/Slider2';
import Post from './componentes/Post/Pago';

import './App.css';

function AppRoutes() {
  const location = useLocation();

  // 👉 Google Analytics: Trackea cambios de ruta
  useEffect(() => {
    sendPageView(location.pathname);
  }, [location]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home />
            <Ocupacion />
            <Slider2 />
            <Testimonios />
            <Footer />
          </>
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/post" element={<Post />} />

      {/* 👉 Redireccionar de /terminos a /about#terminos */}
      <Route path="/terminos" element={<Navigate to="/about#terminos" replace />} />
    </Routes>
  );
}

function App() {
  // 👉 Inicializa Google Analytics solo una vez
  useEffect(() => {
    initGA();
  }, []);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
