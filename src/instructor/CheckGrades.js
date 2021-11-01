import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";


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

  const ViewScoresClickHandler = (e, obj) => {
    setKey(obj);
    setState(true);
  };


  return (
    <div className="container-main-exam">
      <h1 className="exam-header">Select Exam</h1>
      <Table style={{"margin-left":"100px"}}>
        {dataArray.map((obj) => (
          <tr key={`div${obj}`}>
            <td className="th-lg" style={{"font-size" : "40px"}}>{obj}</td>
            <td>
              <Link to={`/instructor/check-grades/:${obj}`}>

                <button className="exam-list-item"
                        key={`score${obj}`}
                        onClick={e => ViewScoresClickHandler(e, obj)}>
                  View Scores
                </button>

              </Link>
            </td>
            <td>
            <button
              className="exam-list-item"
              key={obj}
              onClick={(e) => GraderClickHandler(e, obj)}
            >
              Run AutoGrade
            </button>
            </td>
          </tr>
        ))}
        {console.log(key)}
        {state && <Link to={`/instructor/check-grades/${key}`}/>}
      </Table>
    </div>
  );
};

export default CheckGrades;
