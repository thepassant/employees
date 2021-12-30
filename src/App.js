import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from "./containers/NotFoundPage";
import HomePage from "./containers/HomePage";
import EmployeesPage from "./containers/EmployeesPage";
import Footer from "./components/Footer";
import Header from "./containers/Header";

const App = () => (
    <div className="App">
        <Header />
        <main>
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
        </main>
        <Footer />
    </div>
  );

export default App;
