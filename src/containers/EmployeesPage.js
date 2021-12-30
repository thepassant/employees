import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setEmployeesList} from "../store/actions/EmployeesListActions";

const EmployeesPage = () => {
    const  dispatch = useDispatch(),
        employeesList = useSelector((state) =>  state.employeesListReducer.employeesList);

    useEffect(() => {
        dispatch(setEmployeesList());
    }, [dispatch]);

    console.log(employeesList);

    return (
        <div>
            This is the employees page
        </div>
    );
};

export default EmployeesPage;