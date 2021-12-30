import {updateObject} from "../../constants/Helpers";
import {
    SET_EMPLOYEE_CITY,
    SET_EMPLOYEE_COMPANY_NAME,
    SET_EMPLOYEE_EMAIL,
    SET_EMPLOYEE_NAME,
    SET_EMPLOYEE_PHONE,
    SET_EMPLOYEE_WEBSITE
} from "../ActionTypes";

const initialState = {
    name: '',
    email: '',
    city: '',
    phone: '',
    website: '',
    companyName: '',
};

const editEmployeeData = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMPLOYEE_NAME: {
            return updateObject(state, {name: action.value})
        }
        case SET_EMPLOYEE_EMAIL: {
            return updateObject(state, {email: action.value})
        }
        case SET_EMPLOYEE_CITY: {
            return updateObject(state, {city: action.value})
        }
        case SET_EMPLOYEE_PHONE: {
            return updateObject(state, {phone: action.value})
        }
        case SET_EMPLOYEE_WEBSITE: {
            return updateObject(state, {website: action.value})
        }
        case SET_EMPLOYEE_COMPANY_NAME: {
            return updateObject(state, {companyName: action.value})
        }
        default:
            return state;
    }
};

export default editEmployeeData;