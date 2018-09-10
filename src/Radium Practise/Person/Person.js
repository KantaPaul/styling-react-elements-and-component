import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import './Person.css';

let Person = (props) => {
  let mediaquery = {
    '@media (max-width: 500px)': {
      width: '450px',
    }
  }
  return (
    <div className="Person" style={mediaquery}>
      <p>Hi I am {props.name} and I an {props.age} {props.age > 1 ? 'years' : 'year'} old</p>
      <input type="text" onChange={props.onchage} value={props.name}/>
      <button onClick={props.remove}>Remove</button>
    </div>
  );
}

export default Radium(Person);
