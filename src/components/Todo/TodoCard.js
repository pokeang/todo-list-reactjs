import React from 'react'
import { ACTION } from '../../page/Todo'

export default function TodoCard(props) {
    const { id, name, completed } = props.todo
    return (
        <>
            <div className="item">
                <div className="content">
                    <div style={{color: completed ? '#ccc' : '#000'}}>
                        {name} <span>&nbsp;|&nbsp;</span>
                        <span>{(completed) ? 'Complted' : 'Imcompleted'}</span>
                        <span>&nbsp;|&nbsp;</span>
                        <i
                            className="trash alternate outline icon"
                            style={{ color: "red", marginTop: "7px" }}
                            onClick={() => props.dispatch({type: ACTION.TOGGLE, payload: {id: id, name: name, completed: !completed}})}
                        ></i>
                        <span>&nbsp;|&nbsp;</span>
                        <i
                            className="trash alternate outline icon"
                            style={{ color: "red", marginTop: "7px" }}
                            onClick={() => props.dispatch({type: ACTION.DELETE, payload: { id: id }})}
                        ></i>
                    </div>
                </div>
            </div>
        </>
    )
}

