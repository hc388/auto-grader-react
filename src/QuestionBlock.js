import React from 'react'


const QuestionBlock = (props) => {
    const questionString = props.questionString;
    const points = props.points

    return(
        <div className="container-exam">
    <div className="ques-block">Your Question Here::
    <span className="exam-take-point"> 5 points </span>
    </div>
    <div className="input-block">
    <textarea rows="5" id="title" name="title" className="answer-box"></textarea>
      </div>
</div>
    )
}

export default QuestionBlock