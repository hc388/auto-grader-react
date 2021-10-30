import React from "react";

class ExamRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      examName: "",
      status: 0,
    };
  }
  componentDidMount() {}

  render() {
    return (
      <div className="container-main-exam">
        <h1 className="exam-header">Select Questions and Score to Submit</h1>
        <ul className="questions-list">
          {this.props.questionList.map((obj, index) => {
            return (
              <li key={obj.id}>
                <div className="question-list-item">
                  <div className="left-section">
                    <label htmlFor={"obj.id"}>{obj.questionString}</label>
                  </div>
                  <div className="right-section">
                    <input
                      type="number"
                      className="question-list-item-score"
                      onChange={(e) => this.onInputChange(e, obj.qid)}
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
              onChange={this.onExamNameChange}
            ></input>
          </div>
          <button style={{ width: "200px" }} onClick={this.handleSubmit}>
            Submit Exam
          </button>
          {this.state.status === 1 && <h2>Question Submitted</h2>}
        </ul>
      </div>
    );
  }
}
