import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0 , y:0})
    const {x, y} = coords

    useEffect(() => {
        console.log('Componente montado');

        const mouseMove = (e)=>{
            const coords = { x: e.x, y: e.y}
            setCoords(coords)
            console.log(coords);
        }

        window.addEventListener('mousemove',mouseMove)
        
        return () => {
            window.removeEventListener('mousemove',mouseMove)
        }
    }, [])
    

    return (
        <div>
            <h3>You're great</h3>
            <h2>Coords</h2>
            <p>x: {x}, y: {y}</p>
        </div>
    )
}
