
import { combineReducers } from 'redux';
import employeesList from './reducers/EmployeesListReducer';

const rootReducer = combineReducers({
    employeesList
});

export default rootReducer;