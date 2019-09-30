import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        };
    }

    handleChanges = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };


    submitItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.item)
      }
    
    render() {
        console.log(this.state, 'form state')
        return(
            <form onSubmit={this.submitItem}>
            <input 
                type="text"
                value={this.item}
                name="item"
                onChange={this.handleChanges}>
            </input>
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;