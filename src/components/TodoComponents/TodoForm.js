import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        };
    }

    


    render() {
        console.log(this.state, 'form state')
        return(
            <form onSubmit={this.props.submitItem}>
            <input 
                type="text"
                value={this.item}
                name="item"
                onChange={this.props.handleChanges}>
            </input>
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;