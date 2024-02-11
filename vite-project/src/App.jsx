import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { Ground } from './Components/Ground.jsx';
import { FVP as Fvp} from './Components/FPV';
import { Player } from './Components/Player.jsx';
import { Cubes } from './Components/Cubes.jsx'
import { TextureSelector } from './Components/TextureSelect.jsx'
 
function App() {
  return (
    <>
    <Canvas>
      <Sky sunPosition={[100, 100, 20]}/> 
      <ambientLight intensity={0.5}/> 
      <Physics>
        <Cubes />
        <Ground />
        <Player />
      </Physics>
      <Fvp />
    </Canvas>
    <div className='pointer'>+</div>
    <TextureSelector />
    </>
  )
}

export default App;
