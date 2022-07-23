import * as C from './App.styles';
import { Character } from './components/Character'
import { useCharacter } from './hooks/useCharacter'
import { useEffect } from 'react';

const App = () => {

  const char = useCharacter();

  useEffect(()=>{
    window.addEventListener('keydown', handleKeyDown);
  },[])

  const handleKeyDown = () => {
    console.log('apertou')
  }

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} />
      </C.Map>
    </C.Container>
  ); 
}

export default App;