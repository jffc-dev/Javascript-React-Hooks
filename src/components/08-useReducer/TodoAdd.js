import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAdd }) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        
        e.preventDefault();

        if(description.trim().length <= 1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAdd(newTodo);
        reset();
    }

    return (
        <>
            <h4>Add TODO</h4>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input type='text'
                name='description'
                placeholder='what are you going to do?'
                autoComplete='off'
                className='form-control'
                onChange={handleInputChange}
                value={description}></input>

                <button className='btn btn-outline-primary mt-1 w-100'>Add</button>
            </form>
        </>
    )
}
