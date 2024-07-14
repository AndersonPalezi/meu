import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Curriculo from './pages/CurriloPage/CurriculoPage'; // Importe seus componentes de página aqui
import About from "./pages/About/About";
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculum" element={<Curriculo />} />
        <Route path="/about" element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      
      
    </Router>
  );
};

export default App;
