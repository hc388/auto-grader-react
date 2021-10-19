import React, {useState, useEffect} from 'react';
import RenderQuestionMaker from './RenderQuestionMaker';
import * as SourceAPI from './SourceAPI'

function QuestionMaker(props) {


    /* 
        {"questionString":"Define a function sub, which subtracts two numbers","difficulty":"hard",
        "topic":"functions","testCases":[{"functionCall":"sub(3,2)","functionCallCorrectAnswer":1},
        {"functionCall":"sub(3,3)","functionCallCorrectAnswer":0}],"qid":null}
    */
    const [questionString, updateQuestion] = useState("");
    const [testcase1, updateTestcase1] = useState("");
    const [case1Answer, updateCase1Answer] = useState("");
    const [testcase2, updateTestcase2] = useState("");
    const [case2Answer, updateCase2Answer] = useState("");
    const [testcase3, updateTestcase3] = useState("");
    const [case3Answer, updateCase3Answer] = useState("");
    const [topic, updateQuestionType] = useState("");
    const [difficulty, updateDifficulty] = useState("");

    const difficultyUpdate = (newDiff) => {
        console.log("New difficulty is: ", newDiff)
        updateDifficulty(newDiff)
    }

    let questionToAdd = new Object()
    questionToAdd.questionString = questionString
    questionToAdd.difficulty = difficulty
    questionToAdd.topic = topic
    questionToAdd.testCases = {[testcase1] : case1Answer, [testcase2] : case2Answer, [testcase3] : case3Answer} 

    let finalObj = new Object()
    finalObj.questionToAdd = questionToAdd

    console.log("Object: ", finalObj)


    const onSubmitHandler = async function(e){
        e.preventDefault();
        // console.log("Before calling the api  : ", finalObj)
        // let response = await SourceAPI.addQuestionToBank(finalObj)
        // console.log("After calling the API: ", response)
        let response = await SourceAPI.listQuestionBank()
        console.log("List of questions in the bank: ", response)
        
    }


    


    return(
        <RenderQuestionMaker updateQuestion = {updateQuestion} updateTestcase1 = {updateTestcase1} 
        updateTestcase2 = {updateTestcase2} updateTestcase3 = {updateTestcase3} updateCase1Answer = {updateCase1Answer}
         updateCase2Answer = {updateCase2Answer} updateCase3Answer = {updateCase3Answer} updateDifficulty = {difficultyUpdate}
          updateQuestionType = {updateQuestionType} onSubmitHandler = {onSubmitHandler} />
    )

}

export default QuestionMaker