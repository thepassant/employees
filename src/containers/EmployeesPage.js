import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setEmployeesList} from "../store/actions/EmployeesListActions";
import Employee from "./Employee";
import EditEmployeeModal from "../components/modals/EditEmployeeModal";

const EmployeesPage = () => {
    const  dispatch = useDispatch(),
        employeesList = useSelector((state) =>  state.employeesListReducer.employeesList);

    useEffect(() => {
        dispatch(setEmployeesList());
    }, [dispatch]);

    return (
        <div className='container'>
            <div className='employees-wrapper'>
                {employeesList.map((el) => (
                    <Employee
                        key={el.id}
                        data={el}
                    />
                ))}
            </div>
            <EditEmployeeModal />
        </div>
    );
};

export default EmployeesPage;