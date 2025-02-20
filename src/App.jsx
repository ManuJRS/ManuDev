import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Navbar } from '../src/components/Navbar/Navbar';
import { Info } from '../src/pages/Info.jsx'
import { Home } from '../src/pages/Home'
import { Agrouno } from '../src/pages/Agrouno.jsx';
import { Esmeralda } from '../src/pages/Esmeralda.jsx';
import { TiendaDeMuebles } from '../src/pages/TiendaDeMuebles.jsx'
import { Arsa } from '../src/pages/Arsa.jsx';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/info" element={<Info />}></Route>
        <Route path="/Agrouno" element={<Agrouno />}></Route>
        <Route path="/Tienda-de-muebles" element={<TiendaDeMuebles />}></Route>
        <Route path="/Esmeralda-Brewing" element={<Esmeralda />}></Route>
        <Route path="/Arsa-Renoval" element={<Arsa />}></Route>
      </Routes>
    </div>
  )
}

export default App