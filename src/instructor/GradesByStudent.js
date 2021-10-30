import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

import QuestionBlock from "./QuestionBlock";
import ResultTable from "./ResultTable";
import ResultSection from "./ResultSection";

const GradesByStudent = props => {

  const [loading, setLoading] = useState(true);
  const [scoreDetails, setScoreDetails] = useState([]);
  const [questionArray, setQuestionArray] = useState([]);
  const [answerArray, setAnswerArray] = useState([]);
  const [comment, setComment] = useState("")
  const [totalPoints, setTotalPoints] = useState()
  const [saveStatus, setSaveStatus] = useState(false)

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



  }, [saveStatus]);

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

  const changeAnswer = async (e, index) => {
    let tempArray = answerArray
    tempArray.map( (item, pos) => {
      if(pos === index) {
        tempArray[pos] = parseInt(e.target.value)
      }
    })
    console.log(tempArray)
      setTotalPoints(tempArray.reduce((a, b) => a + b, 0))
    await setAnswerArray(tempArray)
  }


  const updateScore = async () => {

    console.log(JSON.stringify({
      studentScoreDetails: {
        examId: params.examName,
        studentId: params.studentID,
        pointsPerQuestion: answerArray,
        totalPoints: totalPoints,
        comments: comment
      }}))
    const res = await axios.post("https://beta-0990913.herokuapp.com/api/updatePointsAndCommentsForExam.php",
      JSON.stringify({
        studentScoreDetails: {
          examId: params.examName,
          studentId: params.studentID,
          pointsPerQuestion: answerArray,
          totalPoints: totalPoints,
          comments: comment
        }
    })).then(
      resp => console.log(resp)
    )
    setSaveStatus(true)
  }

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
                        <th>Update</th>
                      </tr>
                      </thead>
                      <tbody>
                      <ResultSection gradeobj={obj}/>
                      <tr>
                        <th>Total</th>
                        <td/>
                        <td/>
                        <th>{obj.pointsForQuestion}</th>
                        <th><input  placeholder={"Update Point"} onChange={e=>changeAnswer(e, index)}/></th>

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
            <input placeholder="Add Comments here..." className="result-comment-section" onChange={ e =>setComment(e.target.value)}/>
          </Row>
          <Row className="align-items-center">
            <Col className={"col-4"}>
              <Button className="btn-info" onClick={updateScore}>Save Changes</Button>
            </Col>
          </Row>
          {saveStatus &&
            <Row>
              Your changes were saved.
            </Row>
          }
        </Container>
      </div>
    </div>
  );
};

export default GradesByStudent;