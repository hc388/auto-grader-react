import React from "react";
import * as SourceAPI from './SourceAPI'
import QuestionBlock from "./QuestionBlock";

const conveToArray = (obj) => {
    let array = []
    for (let eachobj in obj)
        array.push(obj[eachobj])
    return array
}

class TakeExam extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
        
    }
    componentDidMount(){
        //GET THE EXAM OBJECT
    }

    render(){
        const primaryObj = {a: 1, b: 2, c: 3}
        const primaryarr = conveToArray(primaryObj)
        return(
            <div className="container-main-exam">
                <h1 className="exam-header">Exam 1</h1>
                    {primaryarr.map(obj => <QuestionBlock />)}
                    <button style={{width: "250px"}}>Submit Exam</button>
                </div>
        )
    }
}

export default TakeExam