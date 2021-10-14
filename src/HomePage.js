import './App.css'
import React, {useState} from 'react';
import logo from './logo.png'
import LoginForm from './LoginForm'
import {Link, Redirect} from 'react-router-dom'



function HomePage(props) {

    const [userName, updateUser] = useState("")
    const [passWord, updatePass] = useState("")
    const [role, updateRole] = useState("")
    const [page, updatePage] = useState("")

    let userUpdater = newUser => {
        updateUser(newUser)
    }

    let passUpdater = newPass => {
        updatePass(newPass)
    }

    let validateLogin = (pass,user) => {
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
        else if(user !== "")
            updateRole("notfound")
        
    }
    return (
            <div>
                <LoginForm upUser={userUpdater} upPass={passUpdater} status={0}
                                           validator={validateLogin}/>
                {role === "admin" && <Redirect to="/instructor" />}

                {role === "notfound" && <h2 id="login-error-msg">Username and/or Password is wrong.</h2>}

            </div>
    );
}

export default HomePage;