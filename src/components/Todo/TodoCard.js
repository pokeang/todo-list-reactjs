import React from 'react'
import { ACTION } from '../../page/Todo'

export default function TodoCard(props) {
    const { id, name, completed } = props.todo
    return (
        <>
            <tr style={{color: completed ? '#ccc' : '#000'}}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{(completed) ? 'Complted' : 'Imcompleted'}</td>
                <td>
                    <i
                        className="check circle alternate outline icon"
                        style={{ color: "green", marginTop: "7px" }}
                        onClick={() => props.dispatch({type: ACTION.TOGGLE, payload: {id: id, name: name, completed: !completed}})}
                    ></i>
                    <span>&nbsp;|&nbsp;</span>
                    <i
                        className="trash alternate outline icon"
                        style={{ color: "red", marginTop: "7px" }}
                        onClick={() => props.dispatch({type: ACTION.DELETE, payload: { id: id }})}
                    ></i>
                </td>
            </tr>
        </>
    )
}

