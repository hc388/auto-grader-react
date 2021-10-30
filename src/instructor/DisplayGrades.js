import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'

const DisplayGrades = (props) => {

  const [studentName, setStudentName] = useState([])
  const [examId, setExamId] = useState("")
  const [scores, setScores] = useState([])
  const [loading, setLoading] = useState(true)
  let {examName} = useParams()

  useEffect( async () => {
    examName = examName.slice(-examName.length + 1)
    setExamId(examName)

      await axios.post("https://beta-0990913.herokuapp.com/api/getGradesByExam.php", JSON.stringify({examName: examName}))
        .then(res => {
          if(res.data.responseCode === 404)
            return (<h1>Go back and Try again</h1>)
          setStudentName(res.data.examGrades.studentNames)
          setScores(res.data.examGrades.scores)
        })
    setLoading(false)
    },[]

  )

  return(
    <div className="container-main-exam">
      <h1 className="exam-header">Results</h1>
      {loading ? <h1>LOADING....</h1> :
        <div className="exam-list">
          {
            studentName.map((name, index) => (
              <div className="list" key={index}>
                <h3>{name}</h3>
                <h3 className="exam-list-item">{scores[index]}</h3>
                <Link to={`/instructor/check-grades/${examId}/${name}`}>
                <button style={{width: "200px"}}>View Scores</button>
                </Link>
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default DisplayGrades