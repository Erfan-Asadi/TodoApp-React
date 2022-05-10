import React, {useContext} from 'react';
import { todosContext } from '../contexts/TodosContext';
import TodoItem from './TodoItem';

const TodoList = () => {
    const {filteredTodos} = useContext(todosContext);
    
    return (
        <ul className='todo-list'>
            {filteredTodos.map(todo => <TodoItem key={todo.id}  todo={todo} />)}
        </ul>
    )
}
export default TodoList;