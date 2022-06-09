import React from 'react'
import TodoCard from './TodoCard'

export default function TodoCardList(props) {
    const renderTodoList = props.todos.map(todo => {
        return (<TodoCard todo={todo} dispatch={props.dispatch} key={todo.id} />);
    });
    return <div className="ui celled list">{renderTodoList}</div>;
}
