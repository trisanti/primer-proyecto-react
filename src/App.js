import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Character from './componentes/Character';
// import Counter from './componentes/Counter';
import RickAndMortyCharacters from './componentes/RickAndMortyCharacters';

function App() {
  return (

  <div className='container'> 
  {/*className='bg-dark'>
    <div>Hola mundo</div>
    <Character></Character>
    <Character></Character>
    <Counter/>*/}
    <RickAndMortyCharacters/>
  </div>
  );
}

export default App;
