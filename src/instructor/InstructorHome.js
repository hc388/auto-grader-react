/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Table, Container, Button } from "react-bootstrap";


function InstructorHome(props) {

  return (
    <div className="container-main-login">
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
              <Button className="btn-lg span-link" style={{"fontSize": "40px"}}> Make a Question</Button>{" "}
            </Link>
          </div>
          <div className="make-exam">
            <Link to="/instructor/exam-maker">
              <Button className="btn-lg span-link " style={{"fontSize": "40px"}}> Make an Exam</Button>{" "}
            </Link>
          </div>
          <div className="see-grades">
            <Link to="/instructor/check-grades">
              <Button className="btn-lg span-link" style={{"fontSize": "40px"}}>Check Grades</Button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorHome;
