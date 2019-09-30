import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todoData = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: todoData
    }
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    })
  }

  submitItem = e => {
    e.preventDefault();
    this.addItem(this.state.item)
  }

  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    })
  }



  render() {
    console.log(this.state)
    return (
      <div>
        <h1>To Do List</h1>
        <TodoForm handleChanges={this.handleChanges} addItem={this.addItem} submitItem={this.submitItem} clearCompleted={this.clearCompleted}/>
        <TodoList todo={this.state.todo}/>
      </div>
    );
  }
}

export default App;
