import React, { useState } from "react";
import books from "../img/books.jpg";
import {Container} from "react-bootstrap";

function LoginForm(props) {
  const [user, updateUser] = useState("");
  const [pass, updatePass] = useState("");

  let submitHandler = (event) => {
    event.preventDefault();
    props.validator(user, pass);
    // props.upPass(pass)
    // props.upUser(user)
    // updateUser("")
    // updatePass("")
  };

  return (
  <Container>
    <div className="container-main">
      <div className="container-left">
        <img src={books} alt="books.jpg" />
      </div>
      <div className="container-right">
        <span className="login-header">Welcome to</span>
        <span className="login-header-big">Auto Grader!</span>
        <div className="divider">
          <div className="divider-sec1"></div>
          <span className="divider-text">Login</span>
          <div className="divider-sec2"></div>
        </div>
        <form action="#" onSubmit={() => false} method="post">
          <div className="form-container">
            <label className="label-form" htmlFor="user">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="user"
              required
              onChange={(e) => updateUser(e.target.value)}
            />

            <label className="label-form" htmlFor="pass">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="pass"
              required
              onChange={(e) => updatePass(e.target.value)}
            />

            <button type="submit" onClick={submitHandler} value="Login">
              Login
            </button>
            {props.status === 1 && (
              <p id="login-error-msg">!! Invalid username and/or password</p>
            )}
            {props.status === 2 && (
              <p id="login-error-msg">!! You Must Login First</p>
            )}
          </div>
        </form>
      </div>
    </div>
  </Container>
  );
}

export default LoginForm;
