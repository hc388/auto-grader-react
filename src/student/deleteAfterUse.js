import React from "react";

const QuestionExamBox = (props) => {
  let answer = "";
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const textAreaRef = React.createRef();

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
          ref={textAreaRef}
          name="answer-box"
          id="answer-box"
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => {
            if (e.key === "Tab") {
              e.preventDefault();

              const { selectionStart, selectionEnd } = e.target;

              const newValue =
                answer.substring(0, selectionStart) +
                "  " +
                answer.substring(selectionEnd);

              answer = newValue;
              if (textAreaRef.current) {
                textAreaRef.current.value = newValue;
                textAreaRef.current.selectionStart =
                  textAreaRef.current.selectionEnd = selectionStart + 2;
              }
            }
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default QuestionExamBox;
