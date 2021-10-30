import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayExam from "./DisplayExam";
import { Link } from "react-router-dom";

const ShowAllExams = (props) => {
  const [dataArray, setdataArray] = useState([]);
  const [state, setState] = useState(false);
  const [key, setKey] = useState("");
  let loading = true;

  useEffect(async () => {
    await axios
      .get("https://beta-0990913.herokuapp.com/api/listAllExams.php")
      .then((res) => {
        console.log(res.data.examNames);
        setdataArray(res.data.examNames);
      });
    loading = false;
  }, []);

  const ClickHandler = (e, obj) => {
    console.log("Key is: ", obj);
    setKey(obj);
    setState(true);
  };

  return (
    <div className="container-main-exam">
      <h1 className="exam-header">Select Exam</h1>
      <div className="exam-list">
        {dataArray.map((obj) => (
          <div className="list">
            <h3>{obj}</h3>
            <button
              className="exam-list-item"
              key={obj}
              onClick={(e) => ClickHandler(e, obj)}
            >
              Run AutoGrade
            </button>
          </div>
        ))}
        {state && <DisplayExam examId={key} />}
      </div>
    </div>
  );
};

export default ShowAllExams;
