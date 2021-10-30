import React, { useEffect, useState } from "react";
import axios from "axios";
import QuestionExamBox from "./QuestionExamBox";
import update from "react-addons-update";

class Student_DisplayExam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionArray: [],
      answerArray: [],
    };

    this.onAnswering = this.onAnswering.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.examId !== prevProps.examId) this.componentDidMount();
  }

  async componentDidMount() {
    const params = { examId: this.props.examId };
    console.log(this.props.examId);
    console.log(params);
    await axios
      .post(
        "https://beta-0990913.herokuapp.com/api/getExamById.php",
        JSON.stringify(params)
      )
      .then((res) => {
        console.log(res);
        this.setState({
          questionArray: res.data.studentExamArray,
          answerArray: new Array(res.data.studentExamArray.length),
        });
      });
  }

  onAnswering = (answer, index) => {
    this.setState(
      update(this.state, {
        answerArray: {
          [index]: {
            $set: answer,
          },
        },
      })
    );
  };

  onSubmit = async () => {
    const res = await axios
      .post(
        "https://beta-0990913.herokuapp.com/api/submitExam.php",
        JSON.stringify({
          studentExamResponses: {
            examId: this.props.examId,
            studentId: this.props.studentId,
            responsesArr: this.state.answerArray,
          },
        })
      )
      .then((data) => console.log(data));
  };

  render() {
    return (
      <div className="container-main-exam">
        <div className="exam-header"> Exam</div>
        {this.state.questionArray.map((obj, index) => (
          <QuestionExamBox
            quesArray={obj}
            qNo={index}
            key={index}
            onChange={this.onAnswering}
          />
        ))}

        <button style={{ width: "350px" }} onClick={this.onSubmit}>
          Submit Exam
        </button>
      </div>
    );
  }
}

export default Student_DisplayExam;
