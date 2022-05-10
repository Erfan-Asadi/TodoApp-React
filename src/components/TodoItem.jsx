import React, { useContext } from 'react';
import { todosContext } from '../contexts/TodosContext';

const TodoItem = ({ todo }) => {
    const { dispatch } = useContext(todosContext);

    const removeTodoHandler = () => {
        dispatch({
            type: 'REMOVE_TODO',
            id: todo.id
        })
    }
    const toggleCompletedTodo = ()=> {
        dispatch({
            type: 'TOGGLE_TODO',
            id: todo.id
        })
    }
    return (
        <li className={todo.completed ? 'todo-item completed' : 'todo-item'} onClick={toggleCompletedTodo}>
            <p>
                {todo.title}
            </p>
            <button className='remove-todo' onClick={removeTodoHandler}>×</button>
        </li>
    )
}
export default TodoItem;