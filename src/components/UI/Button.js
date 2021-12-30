import React from 'react';

const Button = ({clickHandler, label, isAlt, disabled}) => (
    <button className={`btn ${isAlt ? 'btn--alt'  : ''}`} disabled={disabled} onClick={clickHandler}>
        {label}
    </button>
)

export default Button;