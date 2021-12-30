import React from 'react';
import Card from "../components/UI/Card";
import {useDispatch} from "react-redux";
import {openEditEmployeeModal, setEmployeeDataToEdit} from "../store/actions/EmployeesListActions";
import {
    setEmployeeCity, setEmployeeCompanyName,
    setEmployeeEmail,
    setEmployeeName,
    setEmployeePhone, setEmployeeWebsite
} from "../store/actions/EditEmployeeDataActions";

const Employee = ({data}) => {
    const dispatch = useDispatch(),
        {name, email,phone, website,  address: {city},  company} =  data;

    const doubleClickHandler = () => {
        dispatch(setEmployeeName(name));
        dispatch(setEmployeeEmail(email));
        dispatch(setEmployeeCity(city));
        dispatch(setEmployeePhone(phone));
        dispatch(setEmployeeWebsite(website));
        dispatch(setEmployeeCompanyName(company.name));
        dispatch(setEmployeeDataToEdit(data));
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
                    <p>{company.name}</p>
                </div>
            </Card>
        </>
    );
};

export default Employee;