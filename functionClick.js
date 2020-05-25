import React from 'react'

function functionClick() {
        function clickHandler() {
            console.log ("function components")
        };
    return (
        <div>
            <button onClick={clickHandler}>Click here Func</button>
        </div>
    )
}

export default functionClick
