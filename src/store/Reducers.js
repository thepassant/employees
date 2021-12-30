
import { combineReducers } from 'redux';
import employeesListReducer from './reducers/EmployeesListReducer';
import editEmployeeDataReducer from './reducers/EditEmployeeDataReducer';

const rootReducer = combineReducers({
    employeesListReducer,
    editEmployeeDataReducer,
});

export default rootReducer;