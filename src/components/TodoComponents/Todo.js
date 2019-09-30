import React from 'react';

const Todo = props => {
    console.log(props, 'todo props')
    return (
        <div className='todo-container'>
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;