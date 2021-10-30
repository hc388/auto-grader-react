/* eslint-disable no-unused-vars */
import "../css/App.css";
import React, { useState } from "react";
import LoginForm from "../login/LoginForm";
import NewApiCall from "./NewApiCall";
import { Link, Redirect } from "react-router-dom";

function HomePage(props) {
  const [userName, updateUser] = useState("");
  const [passWord, updatePass] = useState("");
  const [role, updateRole] = useState("");
  const [page, updatePage] = useState("");
  const [id, updateId] = useState("");
  const [status, updateStatus] = useState("0");
  const [apiStatus, updateApiStatus] = useState(0);

  let makeCallToApi = 0;

  let userUpdater = (newUser) => {
    updateUser(newUser);
  };

  let passUpdater = (newPass) => {
    updatePass(newPass);
  };

  let detailsUpdater = (newDetails) => {
    rollBackApiStatus();
    console.log("Details received", newDetails);
    if (newDetails.role === "UserNotFound") updateStatus(1);
    updateRole(newDetails.role);
    updateId(newDetails.id);
    props.updateAppId(newDetails.id);
    const obj = {id: newDetails.id}
    localStorage.setItem("personId", JSON.stringify(obj))
  };
  let validateLogin = (user, pass) => {
    updateUser(user);
    updatePass(pass);
    updateApiStatus(1);
    console.log("Changed value to 1");
  };
  let rollBackApiStatus = () => {
    updateApiStatus(0);
  };
  return (
    <div>
      <LoginForm
        upUser={userUpdater}
        upPass={passUpdater}
        status={status}
        validator={validateLogin}
      />
      {apiStatus === 1 && (
        <NewApiCall
          user={userName}
          pass={passWord}
          updateDetails={detailsUpdater}
          stopper={rollBackApiStatus}
        />
      )}
      {role === "Instructor" && <Redirect to="/instructor" />}
      {role === "Student" && (
        <Redirect to={{ pathname: "/student", studentId: id }} />
      )}
    </div>
  );
}

export default HomePage;