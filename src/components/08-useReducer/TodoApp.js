import React, { useEffect, useReducer } from 'react';
import './styles.css'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

export const TodoApp = () => {

    const init = () => {

        return JSON.parse(localStorage.getItem('todos')) || []
        
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    const handleAdd = ( newTodo ) => {

        const addTodo = {
            type: 'add',
            payload: newTodo
        }

        dispatch(addTodo);

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

                    <TodoAdd handleAdd={handleAdd}/>

                </div>

            </div>
        </div>
    )
}
