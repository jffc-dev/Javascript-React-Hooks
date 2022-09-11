import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'

export const Layout = () => {

    const [ size, setSize ] = useState({}); 
    const { state: counter, increment } = useCounter(1);
    const { data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];

    const tag = useRef();

    //throwed synchronously after all DOM manipulations
    useLayoutEffect(()=>{
        setSize(tag.current.getBoundingClientRect());
    },[quote])

    return (
        <div>
            <h1>Layout effect</h1>
            <hr/>

            <blockquote className='blockquote text-end'>
                <p ref={tag}>{quote}</p>
            </blockquote>

            <pre>
                {JSON.stringify(size, null, 3)}
            </pre>
            <button className='btn btn-primary' onClick={()=>{increment(1)}}>Next quote</button>
            
        </div>
    )
}
