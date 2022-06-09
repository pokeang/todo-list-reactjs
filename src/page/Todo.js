import React, { useReducer } from 'react'
import AddTodo from '../components/Todo/AddTodo'
import TodoCardList from '../components/Todo/TodoCardList'
export const ACTION = {
    ADD: 'add',
    TOGGLE: 'toggle',
    DELETE: 'delete'
}
function reducer(todos, action) {
    switch (action.type) {
        case ACTION.ADD:
            return [...todos, {id: Date.now(), ...action.payload}]
        case ACTION.TOGGLE:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    todo = action.payload
                }
                return todo
            })
        case ACTION.DELETE:
            return todos.filter(todo => todo.id !== action.payload.id)
    }
}
export default function Todo() {
    const [todos, dispatch] = useReducer(reducer, [])

    function addTodoHandler(todo) {
        dispatch({ type: ACTION.ADD, payload: todo })
    }
    return (
        <>
            <AddTodo addTodoHandler={addTodoHandler} />
            <TodoCardList todos={todos} dispatch={dispatch}/>
        </>
    )
}
