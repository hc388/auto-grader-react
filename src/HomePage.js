import './App.css'
import React, {useState} from 'react';
import logo from './logo.png'
import LoginForm from './LoginForm'
import {Link, Redirect} from 'react-router-dom'
import { sendStatusCode } from 'next/dist/server/api-utils';



function HomePage(props) {

    const [userName, updateUser] = useState("")
    const [passWord, updatePass] = useState("")
    const [role, updateRole] = useState("")
    const [page, updatePage] = useState("")
    const [status, updateStatus] = useState("0")

    let userUpdater = newUser => {
        updateUser(newUser)
    }

    let passUpdater = newPass => {
        updatePass(newPass)
    }

    let validateLogin = (user,pass) => {
        if (user === "user" && pass === "user") {
            console.log("ROLE IS USER")
            updateRole("user")
            updatePage("Login")
        }
        else if (user === "admin" && pass === "admin") {
            console.log("ROLE IS ADMIN")
            updateRole("admin")
            updatePage("Login");
            <Link to="/instructor"/>
        }
        else if(user !== ""){

            updateRole("notfound")
            updateStatus(1)
        }
        
    }
    return (
            <div>
                <LoginForm upUser={userUpdater} upPass={passUpdater} status={status}
                                           validator={validateLogin}/>
                {role === "admin" && <Redirect to="/instructor" />}

            </div>
    );
}

export default HomePage;