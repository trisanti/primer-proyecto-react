import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Character from './componentes/Character';
import RickAndMortyCharacters from './componentes/RickAndMortyCharacters';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CharacterDetails from './componentes/CharacterDetails';
import Layout from './componentes/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Layout}>
        <Route index Component={RickAndMortyCharacters}></Route>
        <Route path='/characters/:id' Component={CharacterDetails}></Route>
        <Route path='/prueba' element={<p>Prueba</p>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
