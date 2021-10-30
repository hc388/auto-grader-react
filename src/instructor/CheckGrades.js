import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
const CheckGrades = (props) => {
  const [dataArray, setdataArray] = useState([]);
  const [state, setState] = useState(false);
  const [key, setKey] = useState("");
  let loading = true;

  useEffect(async () => {
    await axios
      .get("https://beta-0990913.herokuapp.com/api/listAllExams.php")
      .then((res) => {
        setdataArray(res.data.examNames);
      });
    loading = false;
  }, []);

  const autoGrade = async (obj) => {
    await axios
      .post(
        "https://beta-0990913.herokuapp.com/api/autoGradeByExam.php",
        JSON.stringify({ examName: obj })
      )
      .then((res) => console.log(res));
  };

  const GraderClickHandler = async (e, obj) => {
    await setKey(obj);
    autoGrade(obj).then((data) => console.log(data));
    //autoGradeByExam
  };

  const ViewScoresClickHandler = (e,obj) => {
    setKey(obj);
    setState(true)
  }


  return (
    <div className="container-main-exam">
      <h1 className="exam-header">Select Exam to AutoGrade</h1>
      <div className="exam-list">
        {dataArray.map((obj) => (
          <div className="list" key={`div${obj}`}>
            <h3>{obj}</h3>
            <Link to={`/instructor/check-grades/:${obj}`} >
            <button className="exam-list-item"
                    key={`score${obj}`}
            onClick={e => ViewScoresClickHandler(e,obj)}>
              View Scores
            </button>
            </Link>
            <button
              className="exam-list-item"
              key={obj}
              onClick={(e) => GraderClickHandler(e, obj)}
            >
              Run AutoGrade
            </button>
          </div>
        ))}
        {console.log(key)}
        {state && <Link to={`/instructor/check-grades/${key}`} />}
      </div>
    </div>
  );
};

export default CheckGrades;
