/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Table, Container, Button } from "react-bootstrap";


function StudentHome(props) {
  //console.log("Received props id", props.studentId)

  return (
    <div className="container-main-login">
      <div className="container-left">
        <div className="greet-msg">Hi, Student!</div>
        <div className="container-status-box">
          <h1>You have no tasks pending.</h1>
        </div>
      </div>
      <div className="container-right-login">
        <div className="container-links">
          <div className="make-question">
            <Link to="/student/take-exam">
              <Button className="btn-lg span-link" style={{"font-size": "40px"}}> Take Exam</Button>{" "}
            </Link>
          </div>
          <div className="make-question">
            <Link to="/student/check-grades">
            <Button className="btn-lg span-link" style={{"font-size": "40px"}}>Check Grades</Button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentHome;
