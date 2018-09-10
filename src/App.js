import React, { Component } from 'react';
import MyClass from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'asdsad45', name: 'Pobon', age: 24},
      {id: 'fdgdfg45', name: 'Kanta', age: 28},
      {id: 'asdfdsf65', name: 'Paul', age: 29}
    ],
    showPerson: false
  }

  typingSwitcher = (event, id) => {

    let personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    })

    let person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    let persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState ({
      persons: persons
    })

  }
  personHandler = () => {
    let doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    })
  }

  personRemove = (personIndex) => {
    let myPersons = this.state.persons;
    myPersons.splice(personIndex, 1)
    this.setState ({
      persons: myPersons      
    })
  }

  render() {
    // let button = {
    //   backgroundColor: '#333',
    //   color: '#fff',
    //   padding: '15px 30px',
    //   border: '1px sold #333',
    //   cursor: 'pointer',
    // }

    let persons = null;
    let btnClass = '';

    if (this.state.showPerson) {
      persons = (
        // <div className="person-wraper">
        //   <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        //   <Person onchage={this.typingSwitcher} name={this.state.persons[1].name} age={this.state.persons[0].age}/>
        //   <Person name={this.state.persons[2].name} age={this.state.persons[0].age}/>
        // </div>
        <div className="person-wraper">
          {this.state.persons.map((person, index) => {
            return (
              <Person 
              name={person.name} 
              age={person.age} 
              key={person.id}
              remove={() => this.personRemove(index)}
              onchage={(nameChange) => this.typingSwitcher(nameChange, person.id)}
              />
            )
          })}
        </div>
      );
      // button.backgroundColor = 'red'
      btnClass = MyClass.red;
    }

    // let classes = ['red', 'bold'].join(' ');
    let classes = [];
    // if (this.state.persons.length <= 2) {
    //   classes.push('red')
    // }
    // if (this.state.persons.length <= 1) {
    //   classes.push('bold')
    // }
    if (this.state.persons.length <= 2) {
      classes.push(MyClass.red)
    }
    if (this.state.persons.length <= 1) {
      classes.push(MyClass.bold)
    }

    return (
      <div className={MyClass.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button onClick={this.personHandler} className={btnClass}>{this.state.showPerson === true ? 'Hide Me' : 'Show Me'}</button>
        
        {/* {
          this.state.showPerson === true ? 
          <div className="person-wraper">
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person onchage={this.typingSwitcher} name={this.state.persons[1].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[2].name} age={this.state.persons[0].age}/>
          </div> : null
        } */}
        <p>
          {this.state.persons.length === 0 ? 'List is empty': `Total person ${this.state.persons.length}`}
        </p>
        {persons}

      </div>
    );
  }
}

export default App;
