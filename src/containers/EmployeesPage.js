import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setEmployeesList} from "../store/actions/EmployeesListActions";
import Employee from "./Employee";

const EmployeesPage = () => {
    const  dispatch = useDispatch(),
        employeesList = useSelector((state) =>  state.employeesListReducer.employeesList);

    useEffect(() => {
        dispatch(setEmployeesList());
    }, [dispatch]);

    console.log(employeesList);

    return (
        <div className='container'>
            <div className='employees-wrapper'>
                {employeesList.map((el) => (
                    <Employee
                        key={el.id}
                        name={el.name}
                        email={el.email}
                        city={el.address.city}
                        phone={el.phone}
                        website={el.website}
                        companyName={el.company.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default EmployeesPage;