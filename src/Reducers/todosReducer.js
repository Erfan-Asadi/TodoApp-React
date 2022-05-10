import {
    v4 as uuid
} from "uuid";

export const todosReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, {
                    title: action.title,
                    completed: false,
                    id: uuid()
                }
            ]
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id)
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        default:
            return state;
    }
}