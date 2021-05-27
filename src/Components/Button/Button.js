import React from 'react';
import './Button.scss';

const Button = ({ text, type, btnClick }) => {
    return (
        <div className={`btn ${type}`} onClick={btnClick} >
            {text}
        </div>
    )
}

export default Button;
