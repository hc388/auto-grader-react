import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Axios from "axios";
import QuestionSelector from "./QuestionSelector";
import QuestionDisplayer from "./QuestionDisplayer";
import FilterSelectedQuestions from "./FilterSelectedQuestions";

const ExamLandingPage = (props) => {
  const [questions, setQuestions] = useState([]);
  const [allQuestions, setAllQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      let response = await Axios.get("https://beta-0990913.herokuapp.com/api/listQuestionBankRC.php");
      console.log(response);
      setQuestions(response.data.questions.filter((obj) => obj.questionString !== ""));
      setAllQuestions(response.data.questions.filter((obj) => obj.questionString !== ""));
      let newArray = [];
      response.data.questions.map(obj => newArray.push(obj.questionString));
      console.log(newArray);
      setLoading(false);
    }

    fetchData();

  }, []);


  const onAddingQuestion = quesNo => {
    console.log("Adding Question was called");
    let tempArr = selectedQuestions;
    tempArr.push(quesNo);
    setSelectedQuestions(oldArray => [...oldArray, quesNo]);
  };

  const onRemovingQuestion = quesNo => {
    console.log("Came to Removing question");
    let tempArr = selectedQuestions.filter(item => item !== quesNo);
    setSelectedQuestions(tempArr);

  };

  const updateQuestionsByTopic = (type, key) => {
    console.log("Updater got: ", type, key);

    type === "topic" ?
      setQuestions(questions.filter(obj => obj[type].toUpperCase() === key)) :
      setQuestions(questions.filter(obj => obj[type].toUpperCase() === key));

  };

  const updateQuestionsByDiff = async (diff) => {
    await setQuestions(allQuestions.filter(obj => obj.difficulty.toUpperCase() === diff));
  };

  const resetFilters = () => {
    setQuestions(allQuestions);
  };

  const handleDeselect = () => {
    setSelectedQuestions([])
  }
//obj[topic].toUpperCase() === topic)

  const totalUpdate = (topic, diff) => {
    console.log("TOTAL UPDATE GOT : ", topic, diff);
    if (diff === "ALL" && topic === null)
      setQuestions(allQuestions);
    else if (diff === "ALL" && topic !== null)
      setQuestions(allQuestions.filter(obj => obj.topic.toUpperCase() === topic));
    else if (diff !== "ALL" && topic === null)
      setQuestions(allQuestions.filter(obj => obj.difficulty.toUpperCase() === diff));
    else
      setQuestions(allQuestions.filter(obj => obj.difficulty.toUpperCase() === diff && obj.topic.toUpperCase() === topic));
  };

  const handleSelectedButton = (newList) => {
    setQuestions(newList);
  };

  return (
    <Container className="container-fluid d-flex flex-row w-100 container-main">
      <QuestionSelector questionList={questions} onAddButtonClick={onAddingQuestion} resetter={resetFilters}
                        allQuestionList={allQuestions}
                        updateByTopic={updateQuestionsByTopic} updateByDiff={updateQuestionsByDiff}
                        updater={totalUpdate} showSelected={handleSelectedButton} deSelector={handleDeselect}/>
      <QuestionDisplayer questionList={questions} selectedList={selectedQuestions} onDeleteClick={onRemovingQuestion}
                         resetter={resetFilters} allQuestionList={allQuestions}
                         updateByTopic={updateQuestionsByTopic} updateByDiff={updateQuestionsByDiff}
                         updater={totalUpdate} showSelected={handleSelectedButton}/>
    </Container>
  );

};

export default ExamLandingPage;