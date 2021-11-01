import React, { useEffect, useState } from "react";
import RenderExamMaker from "./RenderExamMaker";
import * as SourceAPI from "../misc/SourceAPI";
import FilterSelectedQuestions from "./FilterSelectedQuestions";

const Temp = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    setLoading(true)
    let response = await SourceAPI.listQuestionBank();
    //console.log(response.questions);
    setQuestions(response.questions.filter((obj) => obj.questionString !== ""));
    let newArray = []
    response.questions.map(obj => newArray.push(obj.questionString))
    console.log(newArray)
    setLoading(false)
  }, []);
  return(
  <div>
    <div className="container-main-exam">
      <div style={{"height": "80%","margin-bottom": "100px"}}>
          {<FilterSelectedQuestions questionList={questions} />}</div>
    </div>
  </div>
  )
};

export default Temp;
