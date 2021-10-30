import React from "react";

const RenderQuestionMaker = (props) => {
  return (
    <div className="container-main">
      <div className="container-left">
        <div className="greet-msg">Upload Your Question Here</div>
        <div className="container-status-box">
          <textarea
            placeholder="Write a Function XYZ..."
            onChange={(e) => props.updateQuestion(e.target.value)}
          />
          <div className="container-testcase">
            <span className="testcase">
              TestCase #1{" "}
              <input
                type="text"
                onChange={(e) => props.updateTestcase1(e.target.value)}
              />{" "}
              <input
                classname="second-input"
                type="text"
                onChange={(e) => props.updateCase1Answer(e.target.value)}
              />
            </span>
            <span className="testcase">
              TestCase #2{" "}
              <input
                type="text"
                onChange={(e) => props.updateTestcase2(e.target.value)}
              />{" "}
              <input
                classname="second-input"
                type="text"
                onChange={(e) => props.updateCase2Answer(e.target.value)}
              />
            </span>
            <span className="testcase">
              TestCase #3{" "}
              <input
                type="text"
                onChange={(e) => props.updateTestcase3(e.target.value)}
              />{" "}
              <input
                classname="second-input"
                type="text"
                onChange={(e) => props.updateCase3Answer(e.target.value)}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="container-right">
        <div className="form-container">
          <label className="question-label" htmlFor="user">
            <b>Question Difficulty</b>
          </label>
          <select
            defaultValue="Easy"
            name="Difficulty"
            className="question-diff"
            onChange={(e) => props.updateDifficulty(e.target.value)}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          {/*<input type="text" placeholder="Change Question Difficulty" name="user" required onChange={onDifficultyChange}/>*/}
          <label className="question-label" htmlFor="pass">
            <b>Question Topic</b>
          </label>
          <input
            type="text"
            placeholder="Add Question Topic"
            name="pass"
            required
            onChange={(e) => props.updateQuestionType(e.target.value)}
          />

          <button
            className="question-btn"
            type="submit"
            value="Submit"
            onClick={props.onSubmitHandler}
          >
            Submit Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default RenderQuestionMaker;
