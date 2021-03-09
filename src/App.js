import logo from './logo.svg';
import React, { Component } from 'react';
import Todo from './components/Todo'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false,
      todos: [],
      input: ''
    }
  }

  handleChange = (event) => {
    this.setState({input: event.target.value})
  }

  handleClick = (event) => {
    event.preventDefault()
    this.setState({todos: [...this.state.todos, this.state.input],
    input: ''
    })
  }

  handleCompleted = (index) => {
    let list = this.state.todos
    list.splice(index, 1)
    this.setState({todos: [...list]})
  }
  
  render () {
    return (
      <div className="Main">
        <div ClassName = "App">
          <label>Enter your new todo here</label>
          <input type="text" value={this.state.input} onChange={this.handleChange}></input>
          <button onClick={this.handleClick} onKeyDown={this.handleClick}>Enter your todo</button>
        </div>
        <div className = "App">
          <label>Your list of Todos</label>
            <ol>
              {this.state.todos.map((todo, index) => <Todo key={index} index={index} title={todo} remove={this.handleCompleted} />)}
            </ol>
        </div>
      </div>
    )
  }
}

export default App;
