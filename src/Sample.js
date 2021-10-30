// const params = {userName: "hrithik", password: "frontend"};
//
//
// const res = await axios.post("https://beta-0990913.herokuapp.com/api/login.php", JSON.stringify(params));
//
//
// console.log("JSON data from API ==>", res.data);
// } catch
// (error)
// {
//     // handle error
//     console.log("error happen ==> " + error);
// }
//
// }
//
//
// ___
//
//
// const params = {examId: "final2019"};
//
//
// const res = await axios.post("https://beta-0990913.herokuapp.com/api/getExamById.php", JSON.stringify(params));
//
//
// console.log("JSON data from API ==>", res.data);
// } catch
// (error)
// {
//     // handle error
//     console.log("error happen ==> " + error);
// }
//
//
// _____________
//
//
// const params = {examName: "final2019"};
//
//
// const res = await axios.post("https://beta-0990913.herokuapp.com/api/getGradesByExam.php", JSON.stringify(params));
//
//
// console.log("JSON data from API ==>", res.data);
// } catch
// (error)
// {
//     // handle error
//     console.log("error happen ==> " + error);
// }
//
//
// ______________________________
//
//
// const params = {examId: "final2019", studentName: "ps863"};
//
//
// const res = await axios.post("https://beta-0990913.herokuapp.com/api/seeExamAndGradeByStudent.php", JSON.stringify(params));
//
//
// console.log("JSON data from API ==>", res.data);
// } catch
// (error)
// {
//     // handle error
//     console.log("error happen ==> " + error);
// }
//
//
// ______________________________
//
//
// const params = {
//     studentScoreDetails: {
//         examId: "final2019",
//         studentId: "ps863",
//         pointsPerQuestion: [20, 30],
//         totalPoints: 50,
//         comments: "not at all good"
//     }
// };
//
//
// const res = await axios.post("https://beta-0990913.herokuapp.com/api/updatePointsAndCommentsForExam.php", JSON.stringify(params));
//
//
// console.log("JSON data from API ==>", res.data);
// } catch
// (error)
// {
//     // handle error
//     console.log("error happen ==> " + error);
// }
//
//
// ______________________________
//
//
// const params = {
//     questionToAdd: {
//         questionString: "Define a function called add that mult 2 numbers",
//         difficulty: "easy",
//         topic: "functions",
//         testCases: {"add(5,8)": "13", "add(0,0)": "0"}
//     }
// };
//
//
// const res = await axios.post("https://beta-0990913.herokuapp.com/api/addQuestionToBank.php", JSON.stringify(params));
//
//
// console.log("JSON data from API ==>", res.data);
// } catch
// (error)
// {
//     // handle error
//     console.log("error happen ==> " + error);
// }
//
//
// ______________________________
//
//
// const params = {
//     studentExamResponses: {
//
//         examId: "final2019",
//         studentId: "ps864",
//         responsesArr: ["def add (n,m):\n\t return n+m", "def add (n,m):\n\t return n+m"]
//     }
// };
//
//
// const res = await axios.post("https://beta-0990913.herokuapp.com/api/submitExam.php", JSON.stringify(params));
//
//
// console.log("JSON data from API ==>", res.data);
// } catch
// (error)
// {
//     // handle error
//     console.log("error happen ==> " + error);
// }
//
//
// ______________________________
//
//
// const res = await axios.get("https://beta-0990913.herokuapp.com/api/listAllExams.php");
//
//
// console.log("JSON data from API ==>", res.data);
// } catch
// (error)
// {
//     // handle error
//     console.log("error happen ==> " + error);
// }
//
//
// ______________________________
//
//
// const res = await axios.get("https://beta-0990913.herokuapp.com/api/listQuestionBank.php");
//
//
// console.log("JSON data from API ==>", res.data);
// } catch
// (error)
// {
//     // handle error
//     console.log("error happen ==> " + error);
// }
//
//
// _____________
//
// const params = {examName: "final2021", questionPointsMap: {1: 30, 2: 43}};
//
//
// const res = await axios.post("https://beta-0990913.herokuapp.com/api/createExam.php", JSON.stringify(params));
//
//
// console.log("JSON data from API ==>", res.data);
// } catch
// (error)
// {
//     // handle error
//     console.log("error happen ==> " + error);
// }
//
//
//
//
//
//
//
//
//
//
