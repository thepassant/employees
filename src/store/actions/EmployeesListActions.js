import {CLOSE_EDIT_EMPLOYEE_MODAL, OPEN_EDIT_EMPLOYEE_MODAL, SET_EMPLOYEES_LIST} from "../ActionTypes";
import list from "../../usersMockResposne.json";

export const  setEmployeesList = () => ({
    type: SET_EMPLOYEES_LIST,
    employeesList: list
});

export const openEditEmployeeModal = () => ({type: OPEN_EDIT_EMPLOYEE_MODAL});

export const closeEditEmployeeModal = () => ({type: CLOSE_EDIT_EMPLOYEE_MODAL});
