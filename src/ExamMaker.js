import React from 'react';
import RenderExamMaker from './RenderExamMaker';
import * as SourceAPI from './SourceAPI'

class ExamMaker extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            questions: []
        }
    }
    async componentDidMount(){
        let response = await SourceAPI.listQuestionBank()
        console.log(response.questions)
        const result = response.questions.filter( obj => obj.questionString !== "")
        this.setState({questions: result})

    }

    render(){
        this.state.questions.map(obj=> console.log(obj.questionString))
        return(
            <div>
            {this.state.questions.length !== 0 && <RenderExamMaker questionList = {this.state.questions} /> }
            </div>
        )
    }
}



export default ExamMaker