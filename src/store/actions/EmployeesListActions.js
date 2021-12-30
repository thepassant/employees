import {SET_EMPLOYEES_LIST} from "../ActionTypes";
import list from "../../usersMockResposne.json";

export const  setEmployeesList = () => ({
    type: SET_EMPLOYEES_LIST,
    employeesList: list
})