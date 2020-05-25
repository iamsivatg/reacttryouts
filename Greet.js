import React, { Component } from 'react';


class Greet extends Component{
    render(){
    return (<div>
    <h1>just the beginning from greet {this.props.name} a.k a {this.props.hero}</h1>
    {this.props.children}
    </div>
    )
    }
}

export default Greet