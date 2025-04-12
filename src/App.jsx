import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import Servicios from './componentes/servicios/Servicios';
import ServicioGrupal from './componentes/servicios/ServicioGrupal';
import Footer from './componentes/footer/Footer';
import About from './componentes/about/About'; // lo crearemos a continuación

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Servicios />
            <ServicioGrupal />
            <Footer />
          </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
