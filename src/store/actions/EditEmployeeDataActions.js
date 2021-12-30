import {
    SET_EMPLOYEE_CITY,
    SET_EMPLOYEE_COMPANY_NAME,
    SET_EMPLOYEE_EMAIL,
    SET_EMPLOYEE_NAME,
    SET_EMPLOYEE_PHONE,
    SET_EMPLOYEE_WEBSITE
} from "../ActionTypes";

export const setEmployeeName = (value) => ({
   type: SET_EMPLOYEE_NAME,
   value
});
export const setEmployeeEmail = (value) => ({
   type: SET_EMPLOYEE_EMAIL,
   value
});
export const setEmployeeCity = (value) => ({
   type: SET_EMPLOYEE_CITY,
   value
});
export const setEmployeePhone = (value) => ({
   type: SET_EMPLOYEE_PHONE,
   value
});
export const setEmployeeWebsite = (value) => ({
   type: SET_EMPLOYEE_WEBSITE,
   value
});
export const setEmployeeCompanyName = (value) => ({
   type: SET_EMPLOYEE_COMPANY_NAME,
   value
});