import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

import QuestionBlock from "../instructor/QuestionBlock";
import StudentResultSection from "./StudentResultSection";

const GradesByStudent = props => {

  const [loading, setLoading] = useState(true);
  const [scoreDetails, setScoreDetails] = useState([]);
  const [questionArray, setQuestionArray] = useState([]);
  const [answerArray, setAnswerArray] = useState([]);
  const [comment, setComment] = useState("")
  const [totalPoints, setTotalPoints] = useState()
  const data = localStorage.getItem('personId')
  const id = JSON.parse(data).id
  console.log("Id looks like", id)

  let params = useParams();

  useEffect(async () => {
    await getExamLayout(params.examName);
    const res = await axios.post("https://beta-0990913.herokuapp.com/api/seeExamAndGradeByStudent.php", JSON.stringify({
      examId: params.examName, studentName: params.studentID
    }))
      .then(resp => {
        console.log(resp);
        setScoreDetails(resp.data.studentScoreDetails);
        setLoading(false);
        updateInitialAnswers(resp);
      });



  }, []);

  const updateInitialAnswers = (res) => {
    let scoreArray = res.data.studentScoreDetails;
    let newArray = []
    for(let obj in scoreArray){
      //console.log(scoreArray[obj].pointsForQuestion)
      let point = parseInt(scoreArray[obj].pointsForQuestion)
      newArray.push(point)
    }
    setAnswerArray(newArray)
  }

  const getExamLayout = async (examName) => {
    const params = { examId: examName };
    await axios
      .post(
        "https://beta-0990913.herokuapp.com/api/getExamById.php",
        JSON.stringify(params)
      )
      .then((res) => {
        setQuestionArray(res.data.studentExamArray);
        setAnswerArray(new Array(res.data.studentExamArray.length));
      });
  };

  return (
    <div className="container-main-exam">
      <h1 className="exam-header">Review Grade for {params.studentID}</h1>
      <div className="preview-grade-section">

        {loading ? <h1>Loading...</h1> :
          scoreDetails.map((obj, index) => {
            return <>
              <Container>
                <Row>
                  <Col className="col-7">
                    <QuestionBlock quesArray={questionArray[index]} index={index} gradeObj={obj}/>
                  </Col>
                  <Col className="col-5">
                    <Table striped bordered hover size="sm" className="table table-hover table-fixed">
                      <thead>
                      <tr>
                        <th>TestCase</th>
                        <th>Expected</th>
                        <th>Run</th>
                        <th>Points</th>
                      </tr>
                      </thead>
                      <tbody>
                      <StudentResultSection gradeobj={obj}/>
                      <tr>
                        <th>Total</th>
                        <td/>
                        <td/>
                        <th>{obj.pointsForQuestion}</th>
                      </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Container>
            </>;
          })
        }
        <Container>
          <Row className="col-lg-12">
            <input value={"Any Comment Goes Here!"} className="result-comment-section" />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default GradesByStudent;