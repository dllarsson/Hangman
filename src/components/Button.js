import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button 
                className={props.className}
                onClick={props.handleClick}
                disabled={props.isDisabled}
            >{props.buttonText}</button>
        </div>
    )
}
    


export default Button