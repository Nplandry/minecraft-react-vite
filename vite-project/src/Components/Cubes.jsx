import { useStore } from '../hooks/useStore'
import { Cube } from './Cube.jsx'

export const Cubes = () => {
    const [cubes] = useStore(state => [state.cubes])
    //Recorre los cubos para obtener la id, posicion y las texturas
    return cubes.map(({ id, pos, texture }) => {
        return (
            //Retornar cubo...
        <Cube 
        key={id}
        id={id}
        position={pos}
        texture={texture}
        />
        )
    })
}