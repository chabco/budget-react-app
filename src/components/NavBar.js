import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="income" className="nav-link">Income</Link>
            </li>
            <li className="nav-item">
                <Link to="/expense" className="nav-link">Expense</Link>
            </li>
            <li className="nav-item">
                <Link to="/setup" className="nav-link">Register</Link>
            </li>
        </ul>
    )
}

export default Navbar;