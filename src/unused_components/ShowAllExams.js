import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayExam from "./DisplayExam";
import { Link } from "react-router-dom";
import {Table, Button} from "react-bootstrap";

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
      <Table>
        {dataArray.map((obj) => (
          <tr>
            <td>{obj}</td>
            <td>
            <button
              className="exam-list-item"
              key={obj}
              onClick={(e) => ClickHandler(e, obj)}
            >
              Run AutoGrade
            </button>
            </td>
          </tr>
        ))}
        {state && <DisplayExam examId={key} />}
      </Table>
      </div>
    </div>
  );
};

export default ShowAllExams;
