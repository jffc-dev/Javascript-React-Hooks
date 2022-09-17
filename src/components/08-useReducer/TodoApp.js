import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm';
import './styles.css'
import { todoReducer } from './todoReducer';

export const TodoApp = () => {

    const init = () => {

        return JSON.parse(localStorage.getItem('todos')) || []
        
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init);
    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

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

        const addTodo = {
            type: 'add',
            payload: newTodo
        }

        dispatch(addTodo);
        reset();
    }

    return (
        <div>
            <h1>TodoApp ( {todos.length} )</h1>
            <hr/>

            <div className='row'>

                <div className='col-7'>
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map((todo, index)=>{
                                return <li 
                                key={todo.id}
                                className='list-group-item'>
                                    <p className='text-center'>{index+1}. {todo.desc}</p>
                                    <button className='btn btn-danger'>Borrar</button>
                                </li>
                            })
                        }
                    </ul>
                </div>
                
                <div className='col-5'>

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
                </div>

            </div>
        </div>
    )
}
