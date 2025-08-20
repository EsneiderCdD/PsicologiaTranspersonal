import { useEffect } from 'react';
import { useLocation, BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { initGA, sendPageView } from './analytics';
import Home from './componentes/Home';
import Footer from './componentes/footer/Footer';
import About from './componentes/about/About';
import SobrePsicotransp from './componentes/psicotranspersonal/sobrePsicotransp';
import SobreCirculoMujeres from './componentes/circuloMujeres/sobreCirculoMujeres';
import SobreTyC from './componentes/tyc/tyc';
import Ocupacion from './componentes/ocupacion/Ocupacion';
import Testimonios from './componentes/testimonios/Testimonios';
import Slider2 from './componentes/slider2/Slider2';
import Post from './componentes/Post/Pago';

import './App.css';


function AppRoutes() {
  const location = useLocation();

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

      <Route path="/sobremi" element={<About />} />
      <Route path="/psicotranspersonal" element={<SobrePsicotransp />} />
      <Route path="/circulomujeres" element={<SobreCirculoMujeres />} />
      <Route path="/tyc" element={ <SobreTyC />} />
      
      <Route path="/post" element={<Post />} />
    </Routes>
  );
}

function App() {
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
