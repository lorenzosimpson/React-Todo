import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Footer from './components/Footer';
import './components/TodoComponents/Todo.css';


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

  toggleItem = id => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        else {
          return item;
        }
      })
    })
  }


  render() {
    console.log(this.state)
    return (
      <div className='app'>
        <div className='app-container'>
          <h1>To Do List</h1>
          <TodoForm handleChanges={this.handleChanges} addItem={this.addItem} submitItem={this.submitItem} clearCompleted={this.clearCompleted}/>
          <TodoList todo={this.state.todo} toggleItem={this.toggleItem}/>
          <button onClick={this.clearCompleted}>Clear Completed</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
