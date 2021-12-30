import React from 'react';
import Card from "../components/UI/Card";

const Employee = ({name, email, city, phone, website, companyName}) => {
    return (
        <Card exClassName='employee'>
            <div className='employee-header'>
                <h3 className='name'>{name}</h3>
            </div>
            <div className='employee-body'>
                <p>{email}</p>
                <p>{city}</p>
                <p>{phone}</p>
                <p>{website}</p>
                <p>{companyName}</p>
            </div>
        </Card>
    );
};

export default Employee;