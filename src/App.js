import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setEmployeesList} from "./store/actions/EmployeesListActions";

function App() {
    const  dispatch = useDispatch(),
        employeesList = useSelector((state) =>  state.employeesListReducer.employeesList);

    useEffect(() => {
        dispatch(setEmployeesList());
    }, [dispatch]);

    return (
    <div className="App">
      employees app
    </div>
  );
}

export default App;
