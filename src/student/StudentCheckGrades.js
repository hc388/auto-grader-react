import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
const StudentCheckGrades = (props) => {
  const [dataArray, setdataArray] = useState([]);
  const [state, setState] = useState(false);
  const [key, setKey] = useState("");
  let loading = true;
  const data = localStorage.getItem('personId')
  const id = JSON.parse(data).id
  console.log("Id looks like", id)

  useEffect(async () => {
    await axios
      .get("https://beta-0990913.herokuapp.com/api/listAllExams.php")
      .then((res) => {
        setdataArray(res.data.examNames);
      });
    loading = false;
  }, []);

  const ViewScoresClickHandler = (e,obj) => {
    setKey(obj);
    setState(true)
  }


  return (
    <div className="container-main-exam">
      <h1 className="exam-header">Select Exam to Check Grades</h1>
      <div className="exam-list">
        {dataArray.map((obj) => (
          <div className="list" key={`div${obj}`}>
            <h3>{obj}</h3>
            <Link to={`/student/check-grades/${obj}/${id}`} >
            <button className="exam-list-item"
                    key={`score${obj}`}
            onClick={e => ViewScoresClickHandler(e,obj)}>
              View Scores
            </button>
            </Link>
          </div>
        ))}
        {console.log(key)}
        {state && <Link to={`/student/check-grades/${key}`} />}
      </div>
    </div>
  );
};

export default StudentCheckGrades;
