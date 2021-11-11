import React, { useEffect, useState } from "react";
import ResultTable from "./ResultTable";
import { Row, Button, Table } from "react-bootstrap";

const ResultSection = (props) => {

  //console.log(props.gradeobj.gradingObj);

  const [testCaseHeader, setTestCaseHeader] = useState([]);
  const [expectedResult, setExpectedResult] = useState([]);
  const [actualResult, setActualResult] = useState([]);
  const [pointScored, setPointScored] = useState([]);
  const [totalPoints, setTotalPoints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scoreObj, setScoreObj] = useState({});
  const [comment, setComment] = useState("");
  const [newTotal, setNewTotal] = useState(0);
  const [overFlow, setOverFlow] = useState(false);


  useEffect(() => {
    (async () => {
        console.log(props.gradeobj)
        await desginArray();
        setLoading(false);
        //printValues();
      }
    )();


  }, []);

  const updateScore = async (index, val) => {
    if (overFlow)
      setOverFlow(false);
    await setScoreObj(oldObj => (
      {
        ...oldObj,
        [testCaseHeader[index]]: val
      }
    ));
  };

  const commentUpdater = async (e, index) => {
    await setComment(oldState => (
      {
        [index]: e.target.value
      }
    ));
  };

  const onCommentButtonClickHandler = async () => {
    let temp = 0;
    for (let value in scoreObj) {
      //console.log(Number(scoreObj[value]));
      temp += Number(scoreObj[value]);
    }
    console.log(temp);
    if (temp > 100)
      setOverFlow(true);
    else {
      await setNewTotal(temp);
      props.onSaving(props.index, temp, scoreObj, comment);
    }
    //console.log(scoreObj, comment)
  };


  const printValues = () => {
    console.log(testCaseHeader, expectedResult, actualResult, pointScored, totalPoints);
  };

  const desginArray = () => {
    for (const property in props.gradeobj.gradingObj) {
      setTestCaseHeader(oldArray => [...oldArray, property]);
      setExpectedResult(oldArray => [...oldArray, props.gradeobj.gradingObj[property][0]]);
      setActualResult(oldArray => [...oldArray, props.gradeobj.gradingObj[property][1]]);
      setPointScored(oldArray => [...oldArray, props.gradeobj.gradingObj[property][2]]);
      setTotalPoints(oldArray => [...oldArray, props.gradeobj.gradingObj[property][3]]);
    }
  };

  return (<React.Fragment>
      <Table striped bordered hover size="lg" className="text-center table table-hover table-fixed result-table">
        <thead>
        <tr>
          <th scope="col">TestCase</th>
          <th scope="col">Expected</th>
          <th scope="col">Run</th>
          <th scope="col">Points</th>
          <th scope="col">Max</th>
          <th scope="col">Update</th>
        </tr>
        </thead>
        <tbody>
        {testCaseHeader.map((obj, index) => {
          return <ResultTable index={index} tests={testCaseHeader} expected={expectedResult} actual={actualResult}
                              points={pointScored} total={totalPoints} updater={updateScore} key={index}/>;
        })}
        </tbody>
      </Table>
      <Row className="d-flex align-items-baseline justify-content-between col-md-12">
        <input placeholder="Add Comments here..." className="result-comment-section col-md-7"
              defaultValue={props.gradeobj.comments} onChange={e => setComment(e.target.value)}/>
        <span className="col-sm-5">
        <Button className="btn-lg h-75 mx-2 col-md-5" onClick={onCommentButtonClickHandler}>Save</Button>
        <Button className="btn-lg h-75 btn-danger col-md-5" onClick={() => {}}>Cancel</Button>
          {overFlow && <text>Total points should not exceed 100.</text>}
        </span>
      </Row>
    </React.Fragment>
  );
};

export default ResultSection;