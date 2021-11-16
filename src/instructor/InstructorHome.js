/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Table, Container, Button } from "react-bootstrap";
import Auth from "../misc/Auth";
import App from "../misc/App";


function InstructorHome(props) {
  const [loginStatus, setLoginStatus] = useState(false);
  const [role, setRole] = useState("null")

  // const isAuthenticated = () => {
  //   let localObj = localStorage.getItem("login");
  //   console.log(localObj)
  //   let temploginStatus = JSON.parse(localObj).isLoggedIn;
  //   console.log(temploginStatus)
  //   setLoginStatus(temploginStatus)
  //
  // };

  // useEffect(() => {
  //   isAuthenticated()
  // }, [loginStatus])
  useEffect(() => {
    setLoginStatus(Auth.isAuthenticated);
    if(Auth.isAuthenticated)
      setRole(Auth.getRole)
  }, [loginStatus, role]);

  const loginErrorMessage = <div><h1>You are not logged in</h1> <br/>
    <h1>Please Logout And Try Logging back in</h1></div>;

  const roleErrorMessage = <div><h1>You are not Authorized to view this</h1> <br/>
    <h1>Please Logout And Try Logging back in</h1></div>;

  return (
    <div className="container-main-login">
      {loginStatus ?
        <React.Fragment>
          {role === "Instructor" ?
            <>
              <div className="container-left-home">
                <div className="greet-msg">Hi, Instructor!</div>
                <div className="container-status-box">
                  <h1>You have no tasks pending.</h1>
                </div>
              </div>
              <div className="container-right-login">
                <div className="container-links">
                  <div className="make-question">
                    <Link to="/instructor/question-maker">
                      <Button className="btn-lg span-link" style={{ "fontSize": "40px" }}> Make a Question</Button>{" "}
                    </Link>
                  </div>
                  <div className="make-exam">
                    <Link to="/instructor/exam-maker">
                      <Button className="btn-lg span-link " style={{ "fontSize": "40px" }}> Make an Exam</Button>{" "}
                    </Link>
                  </div>
                  <div className="see-grades">
                    <Link to="/instructor/check-grades">
                      <Button className="btn-lg span-link" style={{ "fontSize": "40px" }}>Check Grades</Button>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </>
            :
            <>
            {roleErrorMessage}
            </>
          }
        </React.Fragment>
        :
        <React.Fragment>
          {loginErrorMessage}
        </React.Fragment>
      }

    </div>


  );
}

export default InstructorHome;
