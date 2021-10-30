/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

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
          <div className="make-exam">
            <Link to="/instructor/list-all-exams">
              <span className="span-link">Show All Exams</span>
            </Link>{" "}
          </div>
          <div className="make-question">
            <Link to="/instructor/question-maker">
              <button className="span-link"> Make a Question</button>{" "}
            </Link>
          </div>
          <div className="make-exam">
            <Link to="/instructor/exam-maker">
              <button className="span-link"> Make an Exam</button>{" "}
            </Link>
          </div>
          <div className="check-grades">
            <Link to="/instructor/check-grades">
              <span className="span-link">Check Grades</span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorHome;
