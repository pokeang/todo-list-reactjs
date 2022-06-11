import React from 'react'
import TodoCard from './TodoCard'

export default function TodoCardList(props) {
    const renderTodoList = props.todos.map(todo => {
        return (<TodoCard todo={todo} dispatch={props.dispatch} key={todo.id} />);
    });
    return (
        (props.todos.length > 0) &&
        <table className="ui celled table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>{renderTodoList}</tbody>
        </table>
    )
}
