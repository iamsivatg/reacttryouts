import React from 'react';


const Welcome = props => {
        const {name,heroName } = props
    return (<div> 

    <h1>Just the begining from Welcome {name} alias {heroName}
    
    </h1>
    {props.children}
    </div>
    )
   
}

export default Welcome