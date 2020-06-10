import React from 'react'

const Letter = (props) => {
    return(
        <div className={props.className}>
            <p>{props.letter}</p>
        </div>
    )
}

export default Letter