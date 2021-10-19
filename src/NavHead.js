import React from 'react';
import {Link} from 'react-router-dom'
import logo from './logo.png'


const NavHead = () => (
    <div className="nav-container">
            <img className="logo-img" alt="logo" src={logo}/>
            <h2 className="header-main">Auto Grader</h2>
        <Link to="/">
                <button style={{width: "200px"}}>LOGOUT</button>
        </Link>


    </div>
)

export default NavHead