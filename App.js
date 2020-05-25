import React, { Component } from 'react';
import './App.css';
import Welcome from './Components/Welcome';
import Greet from './Components/Greet';
import Hello from './Components/Hello';
import Message from './Components/Message';
import FunctionClick from './Components/functionClick'
import ClassClick from './Components/ClassClick';


class App extends Component{
render(){
  return (
    <div className="App">

      <FunctionClick />
      <ClassClick />

      {/* <Welcome name = "Siva" heroName ="Iron-man" >
          <p> I am Iron-man </p>
        </Welcome>
      <Welcome name = "Siva" heroName ="Iron-man" >
          <p> I am Iron-man </p>
        </Welcome>
        <Message />
      <Welcome name = "Vashi" heroName ="Captain" >
          <button> Whatever it takes </button>
      </Welcome>
      <Welcome name = "Muthu" heroName ="Thor" />
      <Greet name = "Siva" heroName ="Iron-man" >
          <p> I am Iron-man </p>
      </Greet>
      <Greet name = "Vashi" heroName ="Captain" >
          <button> Whatever it takes </button>
      </Greet>
      <Greet name = "Muthu" heroName ="Thor" /> */}
    </div>
  );
}
}
export default App;
