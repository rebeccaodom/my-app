import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Becca', age: 22 },
      { name: 'Leo', age: 24 },
      { name: 'Kate', age: 19 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: 'Leo', age: 24 },
        { name: 'Kate', age: 19 }
      ]
    } )
  }

nameChangedHandler = (event) => { 
  this.setState( { 
    persons: [
      { name: 'Becca', age: 22 },
      { name: event.target.value, age: 24 },
      { name: 'Kate', age: 20 }
    ]
  } )
}

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm Becca!</h1>
        <p>This is my first App!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Becca!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
            
          />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Becca!')} 
          changed={this.nameChangedHandler} >My Hobbies: Racing </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
