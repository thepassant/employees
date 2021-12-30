import {CLOSE_EDIT_EMPLOYEE_MODAL, OPEN_EDIT_EMPLOYEE_MODAL, SET_EMPLOYEES_LIST} from "../ActionTypes";
import {updateObject} from "../../constants/Helpers";

const initialState = {
    employeesList: [],
    isEditEmployeeModal: false,
};

const employeesList = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMPLOYEES_LIST: {
            return updateObject(state, {employeesList: action.employeesList})
        }
        case OPEN_EDIT_EMPLOYEE_MODAL: {
            return updateObject(state, {isEditEmployeeModal: true})
        }
        case CLOSE_EDIT_EMPLOYEE_MODAL: {
            return updateObject(state, {isEditEmployeeModal: false})
        }
        default:
            return state;
    }
};

export default employeesList;