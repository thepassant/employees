
import { combineReducers } from 'redux';
import employeesListReducer from './reducers/EmployeesListReducer';

const rootReducer = combineReducers({
    employeesListReducer
});

export default rootReducer;