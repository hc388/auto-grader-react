import React, { useState } from "react";
import ResultTable from "./ResultTable";

import { Container, Row, Col } from "react-bootstrap";

const QuestionBlock = (props) => {
  const [answer, updateAnswer] = useState("");
  const handleChange = (e) => {
    //console.log(e.target.value)
    updateAnswer(e.target.value);
    props.onChange(e.target.value, props.qNo);
  };
  return (
          <div className="result-question-segment">
            <div className="result-question-top">
              <h2 className="result-question-statement">
                {props.quesArray.questionNo}. {props.quesArray.questionString}
              </h2>
              <h2 className="result-points-statement">{props.quesArray.points} Points</h2>
            </div>
            <div className="result-question-bottom">
              <textarea readOnly={props.gradeObj.responses} className="result-results-textarea"
                        value={props.gradeObj.responses}/>
            </div>
          </div>
  );
};

export default QuestionBlock;

// <Container fluid>
//   <div className="results-left-area">
//     <div className="question-segment">
//       <div className="question-top">
//         <h2 className="question-statement">
//           {props.quesArray.questionNo}. {props.quesArray.questionString}
//         </h2>
//         <h2 className="points-statement">{props.quesArray.points} Points</h2>
//       </div>
//       <div className="question-bottom">
//         <textarea readOnly={props.gradeObj.responses} className="results-textarea" value={props.gradeObj.responses} />
//       </div>
//     </div>
//     <div className="results-right-area">
//       <ResultTable />
//     </div>
//   </div>
// </Container>