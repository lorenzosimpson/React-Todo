import React from 'react';

const Todo = props => {
    return (
        <div className='todo-container'>
            <p className={`item${props.item.completed ?  ' purchased' : ''}`} onClick={() => props.toggleItem(props.item.id)}>{props.item.task}</p>
        </div>
    )
}

export default Todo;