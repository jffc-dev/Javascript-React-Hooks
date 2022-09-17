import React, { useReducer } from 'react'
import './styles.css'
import { todoReducer } from './todoReducer';

export const TodoApp = () => {

    const initialState = [{
        id: new Date().getTime(),
        desc: 'LearnReact',
        done: false
    }];

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleSubmit = (e) => {
        
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: 'New todo',
            done: false
        }

        const addTodo = {
            type: 'add',
            payload: newTodo
        }

        dispatch(addTodo);
    }

    console.log(todos);

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
                        className='form-control'></input>

                        <button className='btn btn-outline-primary mt-1 w-100'>Add</button>
                    </form>
                </div>

            </div>
        </div>
    )
}
