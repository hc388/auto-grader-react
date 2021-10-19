/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import {Link, Redirect} from "react-router-dom";

function InstructorHome(props){

    return(
        <div className="container-main">
            <div className="container-left">
                <div className="greet-msg">Hi, Instructor!</div>
                <div className="container-status-box">
                    <h1>You have no tasks pending.</h1>
                </div>
            </div>
            <div className="container-right">
                <div className="container-links">
                    <div className="make-question"><Link to="/instructor/question-maker"><button className="span-link"> Make a Question</button> </Link></div>
                    <div className="make-rexam"><span className="span-link">Make an Exam</span> </div>
                    <div className="check-grades"><span className="span-link">Check Grades</span> </div>
                </div>
            </div>

        </div>
    )
}

export default InstructorHome;