/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Table, Container, Button } from "react-bootstrap";


function InstructorHome(props) {

  console.log(props.instructorId)
  return (
    <div className="container-main">
      <div className="container-left">
        <div className="greet-msg">Hi, Instructor!</div>
        <div className="container-status-box">
          <h1>You have no tasks pending.</h1>
        </div>
      </div>
      <div className="container-right">
        <div className="container-links">
          <div className="make-question">
            <Link to="/instructor/question-maker">
              <Button className="btn-lg span-link" style={{"font-size": "40px"}}> Make a Question</Button>{" "}
            </Link>
          </div>
          <div className="make-exam">
            <Link to="/instructor/exam-maker">
              <Button className="btn-lg span-link " style={{"font-size": "40px"}}> Make an Exam</Button>{" "}
            </Link>
          </div>
          <div className="see-grades">
            <Link to="/instructor/check-grades">
              <Button className="btn-lg span-link" style={{"font-size": "40px"}}>Check Grades</Button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorHome;
