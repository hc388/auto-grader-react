import React, { useEffect, useState } from "react";
import ResultTable from "./ResultTable";

const ResultSection = (props) => {

  //console.log(props.gradeobj.gradingObj);

  const [testCaseHeader, setTestCaseHeader] = useState([]);
  const [expectedResult, setExpectedResult] = useState([]);
  const [actualResult, setActualResult] = useState([]);
  const [pointScored, setPointScored] = useState([]);
  const [totalPoints, setTotalPoints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
        await desginArray();
        setLoading(false);
        printValues();
      }
    )();


  }, []);

  const printValues = () => {
    //console.log(testCaseHeader, expectedResult, actualResult, pointScored, totalPoints);
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

  return (<>
      {testCaseHeader.map((obj, index) => {
        return <ResultTable index={index} tests={testCaseHeader} expected={expectedResult} actual={actualResult}
                            points={pointScored} total={totalPoints} />;
      })}
    </>
  );
};

export default ResultSection;