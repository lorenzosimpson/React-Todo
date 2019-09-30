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
  render() {
    console.log(this.state.todo)
    return (
      <div>
        <TodoForm />
        <TodoList todo={this.state.todo}/>
      </div>
    );
  }
}

export default App;
