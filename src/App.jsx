import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import Footer from './componentes/footer/Footer';
import About from './componentes/about/About'; // lo crearemos a continuación
import Ocupacion from './componentes/ocupacion/Ocupacion';
import Carousel from './componentes/carousel/carousel';
import Testimonios from './componentes/testimonios/Testimonios';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            
            <Ocupacion />
            <Carousel />
            <Testimonios />
            
           
            <Footer />
          </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
