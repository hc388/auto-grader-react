import React from "react";
import * as SourceAPI from './SourceAPI'

class NewExamMaker extends React.Component{

    

    constructor(props){
        super(props)
        this.state = {
            examName : "",
            status : 0
        }
        let scoreObj = {}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
        this.onExamNameChange = this.onExamNameChange.bind(this)
    }

    componentDidMount() {
        let qid, point = 0;
        for (let items in this.props.questionList){
            this.scoreObj = {...this.scoreObj, [this.props.questionList[items].qid]:point}
        }
        console.log("The object looks like", this.scoreObj)
    }

    onInputChange = (event, qid) => {
        this.scoreObj[qid] = event.target.value
        //console.log(this.scoreObj)
    }

     handleSubmit = async () => {
        this.setState({status: 1})
        console.log("Submitted!!")
        let finalObj = {}
        finalObj.examObject = this.scoreObj
        console.log(this.scoreObj)
        console.log(finalObj)
        let response = await SourceAPI.createExam(finalObj)
        console.log("Response from the submitted exam: ", response)
        
        
    }

    onExamNameChange = event => {
        this.setState({ examName: event.target.value})
    }

    formatter = () => {

    }

    render(){return(
        <div className="container-main-exam">
            <h1 className="exam-header">Select Questions and Score to Submit</h1>
            <ul className="questions-list">
            {this.props.questionList.map(obj => {
                return(
                    <li key={obj.qid}>
                        <div className="question-list-item">
                            <div className="left-section">
                                    <label htmlFor={"obj.id"}>{obj.questionString}</label>                            
                            </div>
                            <div className="right-section">
                                <input type="number" className="question-list-item-score" onChange={e => this.onInputChange(e, obj.qid)}></input>
                            </div>
                        </div>
                    </li>
                )
            })}
            <div>
                <h1>Exam name</h1>
                <input type="text" className="exam-name" onChange={this.onExamNameChange}></input>
                
            </div>
            <button style={{width: "200px"}} onClick={this.handleSubmit}>Submit Exam</button>
                {this.state.status === 1 && <h2>Question Submitted</h2>}
            </ul>
        </div>
    )
}
}

export default NewExamMaker