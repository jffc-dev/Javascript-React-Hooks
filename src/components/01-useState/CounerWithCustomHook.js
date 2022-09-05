import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css'

export const CounteWithCustomHook = () => {

    const {state, increment, decrement } = useCounter(541);

    return (
        <>
            <h1>Counter with hook {state}</h1>
            <hr/>

            <button className='btn' onClick={()=>{increment()}}>+1</button>
            <button className='btn' onClick={()=>{decrement()}}>-1</button>
        </>
    )
}
