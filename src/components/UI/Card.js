import React from 'react';

const Card = ({children, exClassName, doubleClickHandler}) => (
    <div onDoubleClick={doubleClickHandler} className={`card ${exClassName ? exClassName : ''}`}>
        {children}
    </div>
)

export default Card;