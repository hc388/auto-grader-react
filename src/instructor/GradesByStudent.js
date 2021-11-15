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
  const [comment, setComment] = useState({})
  const [totalPoints, setTotalPoints] = useState()
  const [saveStatus, setSaveStatus] = useState(false)
  const [updatedScore, setUpdatedScore] = useState([])

  let params = useParams();

  useEffect(async () => {
    loading && getExamDetails()
    console.log(updatedScore)


  }, [saveStatus, updatedScore, loading]);

  const getExamDetails = async () => {
    await getExamLayout(params.examName);
    const res = await axios.post("https://beta-0990913.herokuapp.com/api/seeExamAndGradeByStudentRC.php", JSON.stringify({
      examId: params.examName, studentName: params.studentID
    }))
      .then(resp => {
        console.log("Detailed stats", resp);
        setScoreDetails(resp.data.studentScoreDetails);
        setLoading(false);
        updateInitialAnswers(resp);
      });
  }


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

  const onCommentButtonClickHandler = () => {
    //console.log(scoreObj, comment)
  }

  const commentUpdater = async (e, index) => {
    await setComment(oldState => (
      {
        [index] : e.target.value
      }
    ))
  }

  const checkIfDuplicateEntryExists = (quesNo) => {
    let index = 0
    for (const obj in updatedScore){
      index += 1
      if(updatedScore[obj].questionNo === quesNo) {
        console.log("Returning", index)
        return index
      }
    }
    return false
  }

  const onDeleteRequest = async (index) => {
    if(checkIfDuplicateEntryExists(index+1) !== false){
      const indexValue = checkIfDuplicateEntryExists(index+1)
      let holdingArray = []
      holdingArray = updatedScore
      console.log("HoldingArray looks like", holdingArray)
      holdingArray.splice(indexValue-1, 1);
      await setUpdatedScore(holdingArray)
      setLoading(true)

    }
  }


  const updateQuestionValues = async (index, totalScore,  scoreObj, comment) => {
    let newObj = {
      questionNo : index+1,
      pointsOfQuestion : totalScore,
      testCasePoints: scoreObj,
      comment: comment
    }

    await console.log(newObj)
    if (checkIfDuplicateEntryExists(newObj.questionNo) !== false){
      const indexValue = checkIfDuplicateEntryExists(newObj.questionNo)
      console.log(indexValue)
      console.log("Came in here")
      let holdingArray = []
      holdingArray = updatedScore
      console.log("Before Updating", holdingArray)
      holdingArray[indexValue-1] = newObj
      console.log("After Updating", holdingArray)
      await setUpdatedScore(holdingArray)
    }
    else
      await setUpdatedScore(oldArray => [...oldArray, newObj])
    //console.log(updatedScore)
  }





  const updateScore = async () => {
    //console.log(updatedScore)


    console.log(JSON.stringify({
      updateRequest: {
        examId: params.examName,
        studentId: params.studentID,
        studentScoreDetails:updatedScore
      }}))
    const res = await axios.post("https://beta-0990913.herokuapp.com/api/updatePointsAndCommentsRC.php",
      JSON.stringify({
        updateRequest: {
          examId: params.examName,
          studentId: params.studentID,
          studentScoreDetails:updatedScore
        }})).then(
      resp => console.log("After updating to API response looks like: ", resp)
    )
    setSaveStatus(true)
    setLoading(true)
  }

  const cancelScore = async () => {
    setUpdatedScore([])
  }

  return (
    <div className="container-main-exam">
      <h1 className="exam-header">Review Grade for {params.studentID}</h1>
      <div className="preview-grade-section container-scrollable">

        {loading ? <h1>Loading...</h1> :
          scoreDetails.map((obj, index) => {
            return <React.Fragment key={index}>
              <Container className="" style={{width: "90%"}}>
                <Row>
                  <Col className="col-6">
                    <QuestionBlock quesArray={questionArray[index]} index={index} gradeObj={obj}/>
                  </Col>
                  <Col className="col-6">
                    <ResultSection quesArray={questionArray[index]} gradeobj={obj} onSaving={updateQuestionValues} onDeleting={onDeleteRequest} index={index}/>

                  </Col>
                </Row>
              </Container>
            </React.Fragment>;
          })
        }
        <Container>
          <Row className="d-flex justify-content-center align-items-center mb-5 mt-5">
            <Col className="col-4">
              <Button className="btn-info btn-lg" style={{transform:"scale(2)"}}  onClick={updateScore}>Save Changes</Button>
            </Col>
            <Col className="col-4">
              <Button className="btn-danger btn-lg" style={{transform:"scale(2)"}}  onClick={cancelScore}>Cancel Changes</Button>
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