import React, { useState } from "react";
import axios from "axios";
import { Table, Row, Col, Button } from "react-bootstrap";

const NewExamMaker = (props) => {
  const [examName, setExamName] = useState("");
  const [status, setStatus] = useState(0);
  const [scoreObject, setScoreObject] = useState({});

  const onInputChange = (e, id) => {
    setScoreObject({
      ...scoreObject,
      [id]: e.target.value
    });
  };

  Object.filter = (obj, predicate) =>
    Object.keys(obj)
      .filter((key) => predicate(obj[key]))
      .reduce((res, key) => Object.assign(res, { [key]: obj[key] }), {});

  const handleSubmit = async (e) => {
    setStatus(1);
    console.log("ScoreObj looks like: ", scoreObject, "for exam: ", examName);
    let filtered = Object.filter(scoreObject, (point) => point > 0);
    const res = await axios
      .post(
        "https://beta-0990913.herokuapp.com/api/createExam.php",
        JSON.stringify({
          examName: examName,
          questionPointsMap: filtered
        })
      )
      .then((data) => console.log(data));
  };

  return (
      <div style={{ "height": "80%", "margin-bottom": "100px" }}>
        <h1 className="exam-header">Select Questions and Score to Submit</h1>
        <Table>
          <tr>
            <th>Question</th>
            <th>Points</th>
          </tr>
          {props.questionList.map((obj) => {
            return (
              <tr key={obj.qid}>
                <td style={{"font-size": "25px"}}>{obj.questionString}</td>
                <td>
                  <input
                    type="number"
                    className="question-list-item-score"
                    onChange={(e) => onInputChange(e, obj.qid)}
                  />
                </td>
              </tr>
            );
          })}

        </Table>


      <div>
        <h1>Exam name</h1>
        <input
          type="text"
          className="exam-name"
          onChange={(e) => setExamName(e.target.value)}
        />
      </div>
      <Button className="btn-lg" onClick={handleSubmit}>
        Submit Exam
      </Button>
      {status === 1 && <h2>Exam Submitted</h2>}

    </div>
  );
};

export default NewExamMaker;

// import React from "react";
// import * as SourceAPI from '../misc/SourceAPI'
// class NewExamMaker extends React.Component{
//
//     constructor(props){
//         super(props)
//         this.state = {
//             examName : "",
//             status : 0,
//             scoreObj: {}
//         }
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.onInputChange = this.onInputChange.bind(this)
//         this.onExamNameChange = this.onExamNameChange.bind(this)
//     }
//
//     componentDidMount() {
//         console.log("Render Exam maker got: ", this.props.questionList)
//         let qid, point = 0;
//         for (let items in this.props.questionList){
//             this.setState((prevProps) => {scoreObj : {}})
//         }
//         console.log("The object looks like", this.scoreObj)
//     }
//
//     onInputChange = (event, qid) => {
//         console.log("Input change received", qid)
//         this.setState({
//             scoreObj[qid] : event.target.value
//         })
//         this.scoreObj[qid] = event.target.value
//         //console.log(this.scoreObj)
//     }
//
//      handleSubmit = async () => {
//         this.setState({status: 1})
//         console.log("Submitted!!")
//         let finalObj = {}
//         finalObj.questionPointsMap = this.scoreObj
//         console.log(this.scoreObj)
//         console.log(finalObj)
//         //let response = await SourceAPI.createExam(finalObj)
//         //console.log("Response from the submitted exam: ", response)
//
//
//     }
//
//     onExamNameChange = event => {
//         this.setState({ examName: event.target.value})
//     }
//
//     formatter = () => {
//
//     }
//
//     render(){return(
//         <div className="container-main-exam">
//             <h1 className="exam-header">Select Questions and Score to Submit</h1>
//             <ul className="questions-list">
//             {this.props.questionList.map(obj => {
//                 console.log(obj)
//                 return(
//                     <li key={obj.qid}>
//                         <div className="question-list-item">
//                             <div className="left-section">
//                                     <label htmlFor={"obj.id"}>{obj.questionString}</label>
//                             </div>
//                             <div className="right-section">
//                                 <input type="number" className="question-list-item-score" onChange={e => this.onInputChange(e, obj.qid)}></input>
//                             </div>
//                         </div>
//                     </li>
//                 )
//             })}
//             <div>
//                 <h1>Exam name</h1>
//                 <input type="text" className="exam-name" onChange={this.onExamNameChange}></input>
//
//             </div>
//             <button style={{width: "200px"}} onClick={this.handleSubmit}>Submit Exam</button>
//                 {this.state.status === 1 && <h2>Exam Submitted</h2>}
//             </ul>
//         </div>
//     )
// }
// }
//
// export default NewExamMaker
