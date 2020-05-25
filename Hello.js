import React, { Component } from 'react';


const Hello = () => {
    return React.createElement('div', { className : 'dummyClass', id: 'hello'}, React.createElement('h1', { className : 'sivaClass', id : 'hello1' }, 'Hello from jsx') )
}



export default Hello