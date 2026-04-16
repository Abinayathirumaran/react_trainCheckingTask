import React from 'react'

function Button(props) {
    return (
        <div className={props.className} onClick={props.onClick}>
            <button>{props.label}</button>
        </div>
    );
}

export default Button