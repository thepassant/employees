import React from 'react';

const Button = ({clickHandler, label, isAlt}) => (
    <button className={`btn ${isAlt ? 'btn--alt'  : ''}`} onClick={clickHandler}>
        {label}
    </button>
)

export default Button;