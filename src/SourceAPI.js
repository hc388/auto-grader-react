const api = "https://beta-0990913.herokuapp.com/api"


export const addQuestionToBank = async function(quesObj) {
    const response = await fetch(`${api}/addQuestionToBank.php`,{
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(quesObj) // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }
    export const createExam = async function(examToAdd){
      const response = await fetch(`${api}/createExam.php`,{
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(examToAdd) // body data type must match "Content-Type" header
        });
        console.log(response.json)
        return response.json(); // parses JSON response into native JavaScript objects
      }

export const listQuestionBank = async function(){
  console.log("CAme in heressss")
    const response = await fetch(`${api}/listQuestionBank.php`,{
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json'
        },
         // body data type must match "Content-Type" header
      });
      console.log(response)
      return response.json(); // parses JSON response into native JavaScript objects
    }

