import React, { createContext, useReducer, useState, useEffect } from "react";
import { todosReducer } from "../Reducers/todosReducer";
import { v4 as uuid } from 'uuid';

export const todosContext = createContext();

const initial = [
    { title: 'Hey babe!', completed: false, id: uuid() },
    { title: 'Learn Javascript ', completed: false, id: uuid() },
    { title: 'Learn React in Net Ninja youtube channel!', completed: false, id: uuid() },
];

const TodosContextProvider = (props) => {
    const [todos, dispatch] = useReducer(todosReducer, initial);
    const [filteredTodos, setFilteredTodos] = useState(todos);
    const [status, setStatus] = useState('all');

    const handleFiltered = () => {
        switch (status) {
            case 'completed':
                const allTodos = todos.filter(todo => todo.completed)
                setFilteredTodos(allTodos);
                break;
            case 'uncompleted':
                const uncompletedTodos = todos.filter(todo => !todo.completed)
                setFilteredTodos(uncompletedTodos);
                break;
            default:
                setFilteredTodos(todos);
        }
    }
    useEffect(handleFiltered, [todos, status]);

    return (
        <todosContext.Provider value={{ dispatch, filteredTodos, setStatus }}>
            {props.children}
        </todosContext.Provider>
    )
}
export default TodosContextProvider;