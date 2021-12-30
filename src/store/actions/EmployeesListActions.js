import {
    CLOSE_EDIT_EMPLOYEE_MODAL,
    OPEN_EDIT_EMPLOYEE_MODAL,
    SET_EMPLOYEE_DATA_TO_EDIT,
    SET_EMPLOYEES_LIST,
    UPDATE_EMPLOYEE_DATA
} from "../ActionTypes";
import list from "../../usersMockResposne.json";

export const setEmployeesList = () => ({
    type: SET_EMPLOYEES_LIST,
    employeesList: list
});

export const openEditEmployeeModal = () => ({type: OPEN_EDIT_EMPLOYEE_MODAL});

export const closeEditEmployeeModal = () => ({type: CLOSE_EDIT_EMPLOYEE_MODAL});

export const setEmployeeDataToEdit = (data) => ({
    type: SET_EMPLOYEE_DATA_TO_EDIT,
    data,
})

export const updateEmployeeData = () => (dispatch, getState) => {
    const state = getState(),
        name = state.editEmployeeDataReducer.name,
        email = state.editEmployeeDataReducer.email,
        city = state.editEmployeeDataReducer.city,
        phone = state.editEmployeeDataReducer.phone,
        website = state.editEmployeeDataReducer.website,
        companyName = state.editEmployeeDataReducer.companyName;

    dispatch(({
        type: UPDATE_EMPLOYEE_DATA,
        editData: {
            name,
            email,
            city,
            phone,
            website,
            companyName,
        }
    }));

    dispatch(closeEditEmployeeModal());
}