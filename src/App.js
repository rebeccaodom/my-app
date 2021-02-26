import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [ personsState, setPersonsState ] = useState({
      persons: [
        { name: 'Becca', age: 22 },
        { name: 'Leo', age: 24 },
        { name: 'Kate', age: 19 },
      ],
    });

   const [otherState, setOtherState] = useState('some other value');
   
   console.log(personsState, otherState)
   
    const switchNameHandler = () => {
        // console.log('Was clicked!');
        // alert('Was clicked!') 
        setPersonsState({ 
        persons: [
          { name: 'Rebecca', age: 22 },
          { name: 'Leo', age: 24 },
          { name: 'Kate', age: 20 }
        ], 
          });
      };
  return (
       <div className="App"> 
         <h1>Hi, I'm Becca Odom</h1>
         <p>This is my first app!</p>
         <button onClick={switchNameHandler}>Switch Name</button>
         <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age} 
        />
         <Person 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age} 
          >
          My Hobbies: Racing
        </Person>
        <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age} 
          /> 
       </div> 
    );
    // {/* return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));   */}
    
  }
  
export default App;

  // App;

// state = {
//   persons: [
//     { name: 'Becca', age: 22 },
//     { name: 'Leo', age: 24 },
//     { name: 'Kate', age: 19 },
//   ],
//   otherState: 'some other value'

// }

// 