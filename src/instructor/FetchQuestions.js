import React, { useEffect, useState } from "react";
import Axios from "axios";


const FetchQuestions = props => {
    async function fetchData() {
      let response = await Axios.get("https://beta-0990913.herokuapp.com/api/listQuestionBankRC.php");
      //console.log(response);
      return response.data.questions.filter((obj) => obj.questionString !== "")
      let newArray = [];
      response.data.questions.map(obj => newArray.push(obj.questionString));
      console.log(newArray);
    }

  return null
}

export default FetchQuestions
