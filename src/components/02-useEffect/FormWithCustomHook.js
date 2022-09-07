import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'

export const FormWithCUstomHook = () => {

    //React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render
    // if(true){
    //     const [test, setTest] = useState(0);
    // }

    const [formState, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const {name, email, password} = formState;

    useEffect(() => {
        console.log("email changed")
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCUstomHook</h1>
            <hr/>

            <div className='form-group'>
                <input type="text" name="name" className="form-control" placeholder="Your name"
                        autoComplete='off' value={name} onChange={handleInputChange}/>
            </div>

            <div className='form-group'>
                <input type="text" name="email" className="form-control" placeholder="Your email"
                        autoComplete='off' value={email} onChange={handleInputChange}/>
            </div>

            <div className='form-group'>
                <input type="password" name="password" className="form-control" placeholder="*******"
                        autoComplete='off' value={password} onChange={handleInputChange}/>
            </div>

            <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
    )
}
