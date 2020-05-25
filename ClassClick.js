import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler() {
        console.log ("class components")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click here Class</button>
            </div>
        )
    }
}

export default ClassClick
