import { useEffect, useState } from 'react'
import * as images from '../images/images'
import { useStore } from '../hooks/useStore';
import { useKeyBoard } from '../hooks/useKeyboard';

export const TextureSelector = () => {
   const [visible, setVisible] = useState(false) // false
    const [texture, setTexture] = useStore(state => 
    [state.texture, state.setTexture])

        const {
            dirt,
            grass,
            wood,
            glass,
            log
        } = useKeyBoard()

        useEffect(()=> {
            const visibilityTimeout = setTimeout(()=> {
                setVisible(false)
            }, 750) 
            setVisible(true)

            return () => {
                clearTimeout(visibilityTimeout)
            }
        }, [texture])


    useEffect(()=> {
        const options = {
            dirt,
            grass,
            wood,
            glass,
            log
        } 
        const selectedTexture = Object.entries(options)
        .find(([texture, isEnable]) => isEnable)
        if (selectedTexture) {
            const [textureName] = selectedTexture
            setTexture(textureName)
        }

        
        
    }, [dirt, grass, wood, glass, log])
        

    if(!visible) return null

    return (
        <div className={`texture-selector ${visible ? '' : 'hidden'}`}>
            {
                Object.entries(images).map(([imgKey, image])=> {
                    return(
                        <img 
                        className={texture == imgKey.replace('Img', '') ? 'selected' : ''}
                        key={imgKey}
                        src={image}
                        alt={imgKey}
                        />
                    )
                })
            }
        </div>
    )
    }

    
