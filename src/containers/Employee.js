import React from 'react';
import Card from "../components/UI/Card";
import {useDispatch} from "react-redux";
import {openEditEmployeeModal} from "../store/actions/EmployeesListActions";

const Employee = ({name, email, city, phone, website, companyName}) => {
    const dispatch = useDispatch();

    const doubleClickHandler = () => {
        dispatch(openEditEmployeeModal());
    };

    return (
        <>
            <Card exClassName='employee' doubleClickHandler={doubleClickHandler}>
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
        </>
    );
};

export default Employee;