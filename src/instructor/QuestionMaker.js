import React, { useState } from "react";
import RenderQuestionMaker from "./RenderQuestionMaker";
import * as SourceAPI from "../misc/SourceAPI";
import Axios from "axios";

function QuestionMaker(props) {
  const [questionString, updateQuestion] = useState("");
  const [testcase1, updateTestcase1] = useState("");
  const [case1Answer, updateCase1Answer] = useState("");
  const [testcase2, updateTestcase2] = useState("");
  const [case2Answer, updateCase2Answer] = useState("");
  const [testcase3, updateTestcase3] = useState("");
  const [case3Answer, updateCase3Answer] = useState("");
  const [testcase4, updateTestcase4] = useState("");
  const [case4Answer, updateCase4Answer] = useState("");
  const [testcase5, updateTestcase5] = useState("");
  const [case5Answer, updateCase5Answer] = useState("");

  const [topic, updateQuestionType] = useState("");
  const [difficulty, updateDifficulty] = useState("");
  const [whileUsed, setWhileUsed] = useState(false);
  const [recursionUsed, setRecursionUsed] = useState(false);
  const [forUsed, setForUsed] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false)

  const difficultyUpdate = (newDiff) => {
    console.log("New difficulty is: ", newDiff);
    updateDifficulty(newDiff);
  };

  // let questionToAdd = {};
  // questionToAdd.questionString = questionString;
  // questionToAdd.difficulty = difficulty;
  // questionToAdd.topic = topic;
  // questionToAdd.testCases = {
  //   [testcase1]: case1Answer,
  //   [testcase2]: case2Answer,
  //   [testcase3]: case3Answer,
  // };
  // whileUsed ? questionToAdd.while_used = 1 : questionToAdd.while_used = 0;
  // recursionUsed ? questionToAdd.recursion_used = 1 : questionToAdd.recursion_used = 0;
  // forUsed ? questionToAdd.for_used = 1 : questionToAdd.for_used = 0;

  const onSubmitHandler = async function(e) {
    e.preventDefault();
    let questionToAdd = {};
    whileUsed ? questionToAdd.while_used = 1 : questionToAdd.while_used = 0;
    recursionUsed ? questionToAdd.recursion_used = 1 : questionToAdd.recursion_used = 0;
    forUsed ? questionToAdd.for_used = 1 : questionToAdd.for_used = 0;
    let response;
    if (questionString !== "") {
      console.log("Data You're Sending: ", JSON.stringify({
        questionToAdd: {
          questionString: questionString,
          difficulty: difficulty,
          topic: topic,
          testCases: {
            [testcase1]: case1Answer,
            [testcase2]: case2Answer,
            [testcase3]: case3Answer,
            [testcase4]: case4Answer,
            [testcase5]: case5Answer,

          },
          while_used: questionToAdd.while_used,
          recursion_used: questionToAdd.recursion_used,
          for_used: questionToAdd.for_used

        }
      }))

      response = await Axios.post("https://beta-0990913.herokuapp.com/api/addQuestionToBankRC.php", JSON.stringify({
        questionToAdd: {
          questionString: questionString,
          difficulty: difficulty,
          topic: topic,
          testCases: {
            [testcase1]: case1Answer,
            [testcase2]: case2Answer,
            [testcase3]: case3Answer,
            [testcase4]: case4Answer,
            [testcase5]: case5Answer,

          },
          while_used: questionToAdd.while_used,
          recursion_used: questionToAdd.recursion_used,
          for_used: questionToAdd.for_used

        }
      }));
    }
    console.log("After calling the API: ", response);

    setSubmitted(true)

  };

  return (
    <RenderQuestionMaker
      updateQuestion={updateQuestion}
      updateTestcase1={updateTestcase1}
      updateTestcase2={updateTestcase2}
      updateTestcase3={updateTestcase3}
      updateTestcase4={updateTestcase4}
      updateTestcase5={updateTestcase5}
      updateCase1Answer={updateCase1Answer}
      updateCase2Answer={updateCase2Answer}
      updateCase3Answer={updateCase3Answer}
      updateCase4Answer={updateCase4Answer}
      updateCase5Answer={updateCase5Answer}
      whileState={whileUsed}
      setWhile={setWhileUsed}
      forState={forUsed}
      setFor={setForUsed}
      recursionState={recursionUsed}
      setRecursion={setRecursionUsed}
      updateDifficulty={difficultyUpdate}
      updateQuestionType={updateQuestionType}
      onSubmitHandler={onSubmitHandler}
      submitStatus = {isSubmitted}
    />
  );
}

export default QuestionMaker;
