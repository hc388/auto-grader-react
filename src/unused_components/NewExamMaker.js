import React from "react";

class NewExamMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      examName: "",
    };
    let scoreObj = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.onExamNameChange = this.onExamNameChange.bind(this);
  }

  componentDidMount() {
    let qid,
      point = 0;
    for (let items in this.props.questionList) {
      this.scoreObj = {
        ...this.scoreObj,
        [this.props.questionList[items].qid]: point,
      };
    }
    console.log("The object looks like", this.scoreObj);
  }

  onInputChange = (event, qid) => {
    this.scoreObj[qid] = event.target.value;
    console.log(this.scoreObj);
  };

  handleSubmit = () => {
    console.log(this.scoreObj);
  };

  onExamNameChange = (event) => {
    this.setState({ examName: event.target.value });
  };

  formatter = () => {};

  render() {
    return (
      <div className="container-main-exam">
        <h1 className="exam-header">Select Questions to Compile</h1>
        <ul className="questions-list">
          {this.props.questionList.map((obj) => {
            return (
              <li key={obj.qid}>
                <div className="question-list-item">
                  <div className="left-section">
                    <input
                      type="checkbox"
                      id={obj.id}
                      name={obj.id}
                      value={obj.questionString}
                      checked={false}
                      onChange={() => this.handleOnChange(obj.qid)}
                    />
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
        </ul>
      </div>
    );
  }
}

export default NewExamMaker;
