import React, { useEffect, useState } from "react";
import RenderExamMaker from "./RenderExamMaker";
import * as SourceAPI from "../misc/SourceAPI";

const Temp = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(async () => {
    let loading = true;
    let response = await SourceAPI.listQuestionBank();
    console.log(response.questions);
    setQuestions(response.questions.filter((obj) => obj.questionString !== ""));
    return () => (loading = false);
  }, []);
  return <div>{<RenderExamMaker questionList={questions} />}</div>;
};

export default Temp;
