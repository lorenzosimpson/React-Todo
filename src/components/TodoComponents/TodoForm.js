import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
            <form onSubmit={null}>
                <input></input>
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;