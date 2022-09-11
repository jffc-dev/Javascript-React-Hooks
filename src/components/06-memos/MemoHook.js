import React, { useMemo, useState } from 'react'
import { heavyProcess } from '../../helpers/heavyProcess';
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'

export const MemoHook = () => {

    const { state:counter, increment } = useCounter(3000);
    const [show, setShow] = useState(false);

    const memoheavyProcess = useMemo(()=>heavyProcess(counter), [counter])

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: {counter}</h3>
            <hr/>

            <p>{memoheavyProcess}</p>

            <button className='btn btn-primary' onClick={()=>{increment(1)}}>
                +1
            </button>

            <button className='btn btn-outline-primary ml-3' onClick={()=>{setShow(!show)}}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
