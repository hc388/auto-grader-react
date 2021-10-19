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

export const listQuestionBank = async function(){
    const response = await fetch(`${api}/listQuestionBank.php`,{
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json'
        },
         // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }