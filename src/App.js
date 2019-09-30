import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todoData = [
  {
    task: 'Organize Garage',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Feed Cat',
    id: Date.now(),
    completed: false
  }
];

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



  render() {
    console.log(this.state)
    return (
      <div>
        <TodoForm handleChanges={this.handleChanges} addItem={this.addItem} submitItem={this.submitItem}/>
        <TodoList todo={this.state.todo}/>
      </div>
    );
  }
}

export default App;
