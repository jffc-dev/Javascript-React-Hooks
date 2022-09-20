import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm';
import './styles.css'
import { TodoList } from './TodoList';
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

    const handleDelete = (todoId) => {

        const deleteTodo = {
            type: 'delete',
            payload: todoId
        }

        dispatch(deleteTodo);
    }

    const handleToggle = (todoId) => {

        const toggleId = {
            type: 'toggle',
            payload: todoId
        }

        dispatch(toggleId);

    }

    return (
        <div>
            <h1>TodoApp ( {todos.length} )</h1>
            <hr/>

            <div className='row'>

                <div className='col-7'>
                    <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete}/>
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
