import React from 'react';
import {Link} from 'react-router-dom'
import logo from './logo.png'


const NavHead = () => (
    <div className="nav-container">
        <Link to="/">
                <img className="logo-img" alt="logo" src={logo}/>
        </Link>
                <h2 className="header-main">Auto Grader</h2>
                <button>LOGOUT</button>
    </div>
)

export default NavHead