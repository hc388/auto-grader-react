import axios from "axios";

const api = "https://beta-0990913.herokuapp.com/api";

export const addQuestionToBank = async function (quesObj) {
  const response = await fetch(`${api}/addQuestionToBank.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(quesObj), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
};
export const createExam = async function (examToAdd) {
  const response = await fetch(`${api}/createExam.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(examToAdd), // body data type must match "Content-Type" header
  });
  console.log("Create exam says: ", response.json);
  return response.json(); // parses JSON response into native JavaScript objects
};

export const listQuestionBank = async function () {
  const response = await fetch(`${api}/listQuestionBank.php`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // body data type must match "Content-Type" header
  });
  console.log("ListQuestionBank says: ", response);
  return response.json(); // parses JSON response into native JavaScript objects
};

export const listAllExams = async function () {
  await axios
    .get("https://beta-0990913.herokuapp.com/api/listAllExams.php")
    .then((res) => {
      console.log(res.data.examNames);
      return res.data.examNames;
    });
};

export const getGradesByExam = async function (examId) {
  const response = await fetch(`${api}/getGradesByExam`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ examName: "112_examName" }), // body data type must match "Content-Type" header
  });
  console.log("GetexamById says: ", response.json());
  return response.json(); // parses JSON response into native JavaScript objects
};
