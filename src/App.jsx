import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import Footer from './componentes/footer/Footer';
import About from './componentes/about/About';
import Ocupacion from './componentes/ocupacion/Ocupacion';
import './App.css';
import Testimonios from './componentes/testimonios/Testimonios';
import Terminos from './componentes/terminos/Terminos'; // 👈 nuevo import
import Slider2 from './componentes/slider2/Slider2'; // 👈 nuevo import
import Post from './componentes/Post/Pago';
function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
