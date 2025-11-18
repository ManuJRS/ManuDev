import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Navbar } from '../src/components/Navbar/Navbar';
import { Info } from '../src/pages/Info.jsx'
import { Home } from '../src/pages/Home'
import { Agrouno } from '../src/pages/Agrouno.jsx';
import { Esmeralda } from '../src/pages/Esmeralda.jsx';
import { TiendaDeMuebles } from '../src/pages/TiendaDeMuebles.jsx';
import { Arsa } from '../src/pages/Arsa.jsx';
import { CardProject } from '../src/pages/CardProject.jsx';
import { EsmeraldaRenewedPage } from '../src/pages/EsmeraldaRenewedPage.jsx'
import { MovieManagerPageView } from '../src/pages/MovieManager.jsx';
import { PokedexPageView } from '../src/pages/PokeLab.jsx';
import { HotelDashboardPageView } from '../src/pages/HotelDashboardView.jsx';

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
        <Route path="/Card-Project" element={<CardProject />}></Route>
        <Route path="/Esmeralda-Brewing-Renewed-Page" element={<EsmeraldaRenewedPage />}></Route>
        <Route path="/Movie-Manager-Page" element={<MovieManagerPageView />}></Route>
        <Route path="/PokeLab-Page" element={<PokedexPageView />}></Route>
        <Route path="/Hotel-Dashboard-Page" element={<HotelDashboardPageView />}></Route>
      </Routes>
    </div>
  )
}

export default App