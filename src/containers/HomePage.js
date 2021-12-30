import React from 'react';

const HomePage = () => (
    <div className='welcome'>
        <img
            src={`${process.env.PUBLIC_URL}/Amdocs.jpg`}
            alt="amdocs"/>
    </div>
)

export default HomePage;