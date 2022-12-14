import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    //React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render
    // if(true){
    //     const [test, setTest] = useState(0);
    // }

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState;
 
    //throwed every time a state changes
    // useEffect( ()=> {
    //     console.log("hey");
    // });

    //throwed every time a state changes
    useEffect( ()=> {
        // console.log("initial");
    }, []);

    useEffect( ()=> {
        // console.log("formState changed");
    }, [formState]);

    useEffect( ()=> {
        // console.log("name changed");
    }, [name]);

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>UseEffect</h1>
            <hr/>

            <div className='form-group'>
                <input type="text" name="name" className="form-control" placeholder="Your name"
                        autoComplete='off' value={name} onChange={handleInputChange}/>
            </div>

            <div className='form-group'>
                <input type="text" name="email" className="form-control" placeholder="Your email"
                        autoComplete='off' value={email} onChange={handleInputChange}/>
            </div>

            { (name === "123") && <Message/>}
        </>
    )
}
