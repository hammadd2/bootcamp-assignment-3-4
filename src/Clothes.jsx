import React from 'react'
function Clothes(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <hr></hr>
            <h1>{props.color}</h1>
        </div>
    )

}

export default Clothes