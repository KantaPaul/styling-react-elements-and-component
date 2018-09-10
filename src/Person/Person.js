import React, { Component } from 'react';
import './Person.css';

let Person = (props) => {
  return (
    <div className="Person">
      <p>Hi I am {props.name} and I an {props.age} {props.age > 1 ? 'years' : 'year'} old</p>
      <input type="text" onChange={props.onchage} value={props.name}/>
      <button onClick={props.remove}>Remove</button>
    </div>
  );
}

export default Person;
