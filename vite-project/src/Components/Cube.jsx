import { useBox } from "@react-three/cannon";
import * as textures from '../images/textures'
import { useState } from "react";
import { useStore } from "../hooks/useStore";
export const Cube = ({ id, position, texture }) => {
    const [isHovered, setIsHovered] = useState(false)
    const  [removeCube] = useStore(state => [state.removeCube])
    const [ref] = useBox(() => ({
        type: 'Static',
        position
    }));

    const activeTexture = textures[texture + 'Texture']
   // const textureMap = useTexture(`/ruta/a/${texture}.jpg`); // Actualiza la ruta de tus texturas
    return (
        <mesh 
        onPointerMove={(e) => {
            e.stopPropagation()
            setIsHovered(true)
        }} 
        onPointerOut={(e)=>{
            e.stopPropagation()
            setIsHovered(false)
        }}
        ref={ref}
        onClick={(e) => {
            e.stopPropagation()
            if(e.shiftKey) {
                removeCube(id)
            }
        }}
        >
            <boxGeometry attach='geometry' /> {/* Agrega los argumentos adecuados para las dimensiones del cubo */}
            <meshStandardMaterial
            color={isHovered ? 'grey' : 'white'}
            transparent
            map={activeTexture} attach='material' />
        </mesh>
    );
};
