import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initGA, sendPageView } from './analytics'; // 👈 nuevo
// Resto de imports...
import Home from './componentes/Home';
import Footer from './componentes/footer/Footer';
import About from './componentes/about/About';
import Ocupacion from './componentes/ocupacion/Ocupacion';
import './App.css';
import Testimonios from './componentes/testimonios/Testimonios';
import Terminos from './componentes/terminos/Terminos';
import Slider2 from './componentes/slider2/Slider2';
import Post from './componentes/Post/Pago';

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    sendPageView(location.pathname);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={
        <>
          <Home />
          <Ocupacion />
          <Slider2 />
          <Testimonios />
          <Footer />
        </>
      } />
      <Route path="/about" element={<About />} />
      <Route path="/tyc" element={<Terminos />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  );
}

function App() {
  useEffect(() => {
    initGA(); // 👈 Inicializa Google Analytics
  }, []);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
