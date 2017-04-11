import React from 'react';
import {Link} from 'react-router';

export default () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Home</Link>
                </div>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-right nav-pills">
                    <li><Link to="/skills" href="#">Skills Reference</Link></li>
                    <li><Link to="/register" href="#">Register</Link></li>
                </ul>
            </div>
        </nav>
    );
}