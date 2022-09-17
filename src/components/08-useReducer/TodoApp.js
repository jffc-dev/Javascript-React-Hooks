import React, { useReducer } from 'react'
import './styles.css'
import { todoReducer } from './todoReducer';

export const TodoApp = () => {

    const initialState = [{
        id: new Date().getTime(),
        todo: 'LearnReact',
        done: false
    }];

    const [todos] = useReducer(todoReducer, initialState);

    console.log(todos);

    return (
        <div>
            <h1>TodoApp</h1>
            <hr/>

            <ul>
                <li>Hello</li>
                <li>World</li>
                <li>Again</li>
            </ul>
        </div>
    )
}
