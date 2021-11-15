import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";


const CheckGrades = (props) => {
  const [dataArray, setdataArray] = useState([]);
  const [state, setState] = useState(false);
  const [key, setKey] = useState("");
  const [autoGradeStatus, setAutoGradeStatus] = useState(false)
  const [ifError, updateIfError] = useState(false)
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
    console.log("Data being sent for autoGrade: ", JSON.stringify(
      { examName : obj }
    ))
    await axios
      .post(
        "https://beta-0990913.herokuapp.com/api/autoGradeByExamRC.php",
        JSON.stringify({ examName: obj })
      )
      .then((res) => {
        console.log(res);
        if (res.data.responseCode === 404)
          updateIfError(true)
        else updateIfError(false)
      });
  };

  const GraderClickHandler = async (e, obj) => {
    await setKey(obj);
    autoGrade(obj).then((data) => console.log(data));
    setAutoGradeStatus(true)
    //autoGradeByExam
  };

  const ViewScoresClickHandler = (e, obj) => {
    setKey(obj);
    setState(true);
  };
  const gradeReleaseHandler = async (e, obj) => {
  await axios.post(
    "https://beta-0990913.herokuapp.com/api/releaseGradesForExam.php",
    JSON.stringify({ examName: obj })
  )

  }

  return (
    <div className="container-main-exam d-flex align-items-center flex-column">
      <h1 className="exam-header">Select Exam</h1>
      <Table className="table-bordered table-striped" striped bordered hover size="lg" style={{"width":"90%"}}>
        <tbody>
        {dataArray.map((obj) => (
          <tr key={`div${obj}`}>
            <td className="th-lg" style={{"fontSize" : "40px", fontWeight: "900"}}>{obj}</td>
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
            <td>
              <button
                className="exam-list-item"
                key={obj}
                onClick={(e) => gradeReleaseHandler(e, obj)}
              >
                Release Grades
              </button>
            </td>
          </tr>


        ))}
        </tbody>
        {console.log(key)}
        {state && <Link to={`/instructor/check-grades/${key}`}/>}
      </Table>
      { !ifError && autoGradeStatus && <text className="mb-5 pb-5" style={{fontSize: "50px"}}>Exam Graded!</text>}
      { ifError && autoGradeStatus && <text className="mb-5 pb-5" style={{fontSize: "50px"}}>Uh oh! There was an error grading the exam</text>}
    </div>
  );
};

export default CheckGrades;
