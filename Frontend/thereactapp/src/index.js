import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SignIn from './LogIn';
import HomePage from './Homepage';
import reportWebVitals from './reportWebVitals';
import SignUpPage from './SignUpPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Router>
            <React.StrictMode>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/homepage" element={<HomePage />} />
                    <Route path="/SignUpPage" element={<SignUpPage />} />
                </Routes>
            </React.StrictMode>
        </Router>
    </>
);

reportWebVitals();
