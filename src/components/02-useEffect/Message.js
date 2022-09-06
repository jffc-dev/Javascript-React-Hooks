import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('Componente montado');
        
        return () => {
            console.log('Componente desmontado');
        }
    }, [])
    

    return (
        <div>
            <h3>You're great</h3>
        </div>
    )
}
