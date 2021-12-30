import {
    CLOSE_EDIT_EMPLOYEE_MODAL,
    OPEN_EDIT_EMPLOYEE_MODAL,
    SET_EMPLOYEE_DATA_TO_EDIT,
    SET_EMPLOYEES_LIST, UPDATE_EMPLOYEE_DATA
} from "../ActionTypes";
import {updateObject} from "../../constants/Helpers";
import {cloneDeep} from 'lodash'

const initialState = {
    employeesList: [],
    isEditEmployeeModal: false,
    employeeToEditData: null,
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
        case SET_EMPLOYEE_DATA_TO_EDIT: {
            return updateObject(state, {employeeToEditData: action.data});
        }
        case UPDATE_EMPLOYEE_DATA: {
            const employeesList = cloneDeep(state.employeesList),
                {
                    name,
                    email,
                    city,
                    phone,
                    website,
                    companyName,
                } = action.editData,
                employee = employeesList.find(el => el.id === state.employeeToEditData.id);

            employee.name  = name;
            employee.email  = email;
            employee.phone  = phone;
            employee.website  = website;
            employee.address.city  = city;
            employee.company.name  = companyName;

            return updateObject(state, {employeesList})
        }
        default:
            return state;
    }
};

export default employeesList;