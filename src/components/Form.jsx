import React, { useContext, useState } from 'react';
import { todosContext } from '../contexts/TodosContext';

const Form = () => {
    const { dispatch, setStatus } = useContext(todosContext);
    const [todoValue, setTodoValue] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch({
            type: 'ADD_TODO',
            title: todoValue,
            completed: false
        })
        setTodoValue('');
    }

    return (
        <form className='todo-form' onSubmit={submitHandler}>
            <input type="text" required placeholder='write something ...' value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
            <input type="submit" value="+" />
            <select onChange={(e)=> setStatus(e.target.value)}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </form>
    )
}
export default Form;