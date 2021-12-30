import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from "./containers/NotFoundPage";
import HomePage from "./containers/HomePage";
import EmployeesPage from "./containers/EmployeesPage";

const App = () => (
    <div className="App">
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="/employees"
                element={<EmployeesPage />}
            />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </div>
  );

export default App;
