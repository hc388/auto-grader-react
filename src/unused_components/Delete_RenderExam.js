import React, { useState } from "react";

const RenderExamMaker = (props) => {
  const [examName, setExamName] = useState("");
  const [status, setStatus] = useState(0);
  const [scoreObject, setScoreObject] = useState({});

  const onInputChange = (e, id) => {
    setScoreObject({
      ...scoreObject,
      [id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setStatus(1);
    console.log("ScoreObj looks like: ", scoreObject, "for exam: ", examName);
  };

  return (
    <div className="container-main-exam">
      <h1 className="exam-header">Select Questions and Score to Submit</h1>
      <ul className="questions-list">
        {props.questionList.map((obj) => {
          return (
            <li key={obj.qid}>
              <div className="question-list-item">
                <div className="left-section">
                  <label htmlFor={"obj.id"}>{obj.questionString}</label>
                </div>
                <div className="right-section">
                  <input
                    type="number"
                    className="question-list-item-score"
                    onChange={(e) => onInputChange(e, obj.qid)}
                  ></input>
                </div>
              </div>
            </li>
          );
        })}
        <div>
          <h1>Exam name</h1>
          <input
            type="text"
            className="exam-name"
            onChange={(e) => setExamName(e.target.value)}
          ></input>
        </div>
        <button style={{ width: "200px" }} onClick={handleSubmit}>
          Submit Exam
        </button>
        {status === 1 && <h2>Exam Submitted</h2>}
      </ul>
    </div>
  );
};

export default RenderExamMaker;
