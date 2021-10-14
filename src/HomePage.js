import './App.css'
import React, {useState} from 'react';
import logo from './logo.png'
import LoginForm from './LoginForm'



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

    let validateLogin = () => {
        if (userName === "user" && passWord === "user") {
            console.log("ROLE IS USER")
            updateRole("user")
            updatePage("Login")
        }
        else if (userName === "admin" && passWord === "admin") {
            console.log("ROLE IS ADMIN")
            updateRole("admin")
            updatePage("Login")
        }
        else if(userName !== "")
            updateRole("notfound")
    }
    return (
            <div>
                <LoginForm upUser={userUpdater} upPass={passUpdater} status={0}
                                           validator={validateLogin}/>

                {role === "notfound" ? <h2 id="login-error-msg">Username and/or Password is wrong.</h2> : <h2></h2>}
            </div>
    );
}

export default HomePage;