// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DestinoList from './pages/DestinosList';  // Certifique-se de importar o componente correto
import Promocoes from './pages/Promocoes';      // Certifique-se de importar o componente correto
import Contato from './pages/Contato';          // Certifique-se de importar o componente correto



const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destino" element={<DestinoList />} />
          <Route path="/promocoes" element={<Promocoes />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

