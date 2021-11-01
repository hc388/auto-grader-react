import "../css/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line no-unused-vars
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NavHead from "./NavHead";
import HomePage from "../login/HomePage";
import InstructorHome from "../instructor/InstructorHome";
import QuestionMaker from "../instructor/QuestionMaker";
import StudentHome from "../student/StudentHome";
import Temp from "../instructor/Temp";
import React, { useState } from "react";
import DisplayExam from "../instructor/DisplayExam";
import Student_ShowAllExams from "../student/Student_ShowAllExams";
import CheckGrades from "../instructor/CheckGrades";
import DisplayGrades from "../instructor/DisplayGrades";
import GradesByStudent from "../instructor/GradesByStudent";
import StudentCheckGrades from "../student/StudentCheckGrades";
import StudentDisplayGrades from "../student/StudentDisplayGrades";


function App() {
  const [id, updateId] = useState("");
  return (
      <Router>
        <body className="App">
        <NavHead />
        <Switch>
          <Route exact path="/">
            <HomePage updateAppId={updateId} />{" "}
          </Route>
          <Route exact path="/instructor">
            <InstructorHome instructorId={id} />
          </Route>
          <Route exact path="/instructor/question-maker">
            <QuestionMaker instructorId={id} />
          </Route>
          <Route exact path="/instructor/exam-maker">
            <Temp instructorId={id} />
          </Route>
          <Route exact path="/instructor/check-grades">
            <CheckGrades instructorId={id} />
          </Route>
          <Route exact path="/instructor/exam-display">
            <DisplayExam instructorId={id} />
          </Route>
          <Route exact path="/instructor/check-grades/:examName">
            <DisplayGrades instructorId={id} />
          </Route>
          <Route  exact path="/instructor/check-grades/:examName/:studentID">
            <GradesByStudent instructorId={id} />
          </Route>
          <Route exact path="/student">
            {" "}
            <StudentHome studentId={id} />{" "}
          </Route>
          <Route exact path="/student/take-exam">
            {" "}
            <Student_ShowAllExams studentId={id} />{" "}
          </Route>
          <Route exact path="/student/check-grades">
            <StudentCheckGrades studentId={id} />
          </Route>
          <Route  exact path="/student/check-grades/:examName/:studentID">
            <StudentDisplayGrades studentId={id} />
          </Route>


        </Switch>
        </body>
      </Router>

  );
}

export default App;
