import React from "react";

const QuestionExamBox = (props) => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="question-segment">
      <div className="question-top">
        <h2 className="question-statement">
          {props.quesArray.questionNo}. {props.quesArray.questionString}
        </h2>
        <h2 className="points-statement">{props.quesArray.points} Points</h2>
      </div>
      <div className="question-bottom">
        <textarea
          name="answer-box"
          id="answer-box"
          onChange={(e) => handleChange(e)}
        ></textarea>
      </div>
    </div>
  );
};

export default QuestionExamBox;
