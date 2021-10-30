/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
let tempStatus = 0;

const Axios = axios.create({
  baseURL: "https://beta-0990913.herokuapp.com/api/",
});

async function loginUser(credentials) {
  const tempObj = {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  };
  console.log("API WAS CALLED");
  const login = await Axios.post("login.php", tempObj);
  console.log("Response from fetch: ", login.data);
  tempStatus = 1;
  return login.data;
}

function ApiCall(props) {
  const [userName, setUserName] = useState(props.user);
  const [password, setPassword] = useState(props.pass);
  const [token, setToken] = useState({});
  if (props.user.length !== 0 || props.pass.length !== 0)
    console.log("Details I'm sending to fetch : ", props.user, props.pass);
  useEffect(() => {
    (async () => {
      if (userName === 0 || password === 0) {
        return 0;
      }

      let response = await loginUser({
        userName,
        password,
      });
      console.log("Got the response ", response);
      setToken(response);
    })();
  }, [userName, password]);
  if (tempStatus === 1) {
    props.updateDetails(token);
    tempStatus = 0;
  }
  return <div></div>;
}

export default ApiCall;
