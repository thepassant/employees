import React from 'react';

const Card = ({children, exClassName}) => (
    <div className={`card ${exClassName ? exClassName : ''}`}>
        {children}
    </div>
)

export default Card;