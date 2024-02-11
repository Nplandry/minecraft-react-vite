import { useEffect, useState } from "react"

const ACTIONS_KEYBOARD_MAP = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: 'jump',
    Digit1: 'dirt',
    Digit3: 'grass',
    Digit5: 'wood',
    Digit2: 'glass',
    Digit4: 'log'
}
export const useKeyBoard = () => {
    
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward : false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        dirt: false,
        grass: false,
        wood: false,
        glass: false,
        log: false
    })

    useEffect(()=> {
        const handledKeyDown = event => {
            const { code } = event
            const action = ACTIONS_KEYBOARD_MAP[code]

            if(action) {
                setActions(prevActions => ({
                    ...prevActions,
                    [action]: true
                }))
            }
        }


        const handledKeyUp = event => {
            const { code } = event
            const action = ACTIONS_KEYBOARD_MAP[code]

            if(action) {
                setActions(prevActions => ({
                    ...prevActions,
                    [action]: false
                }))
            }
        }


        document.addEventListener('keydown', handledKeyDown)
        document.addEventListener('keyup', handledKeyUp)

    return() => {
        document.removeEventListener('keydown', handledKeyDown)
        document.removeEventListener('keyup', handledKeyUp)
    }

    
}, [])
return actions;
}