import {SET_EMPLOYEES_LIST} from "../ActionTypes";
import {updateObject} from "../../constants/Helpers";

const initialState = {
    employeesList: []
};

const employeesList = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMPLOYEES_LIST: {
            return updateObject(state, {employeesList: action.employeesList})
        }
        default:
            return state;
    }
};

export default employeesList;