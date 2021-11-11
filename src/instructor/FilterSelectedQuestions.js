import React, { useState } from "react";
import { Col, Row, Grid } from "react-flexbox-grid";
import NewExamMaker from "./NewExamMaker";
import { Table, Container, Button } from "react-bootstrap";
import Temp from "./Temp";

const FilterSelectedQuestions = (props) => {
  const list = props.questionList;
  console.log("Filter got", list);

  const [checkList, setCheckList] = useState([]);
  const [checkedState, setCheckedState] = useState(
    new Array(list.length).fill(false));
  const [submit, setSubmit] = useState(0);

  const filterSelection = (e, item) => {
    if (checkList.includes(item)) {
      let newArray = checkList.filter(obj => obj !== item);
      setCheckList(newArray);
    } else {
      setCheckList(oldArray => [...oldArray, item]);
    }
  };

  const onButtonClick = (e) => {
    setSubmit(1);
  };

  const onHandleChange = (e, position, obj) => {
    filterSelection(e, obj);
    const newArray = checkedState.map((item, index) => index === position ? !item : item);
    setCheckedState(newArray);
  };

  return (
    <Container className="container-fluid d-flex flex-row w-100 container-main">
      <Container
        className="container-fluid d-flex flex-column justify-content-center align-items-center  col-lg-5 h-100 container-left">

        <Row className="greet-msg m-3">Select Questions To Compile</Row>
        <Table className="table-bordered">
          <tbody>

          {list.map((obj, index) => <Row className="questions-rows" key={obj.id}>
              <tr>
                <th style={{ "width": "50px" }}><input type={"Checkbox"} className="largerCheckbox" name={obj} checked={checkedState[index]}
                                                       onChange={e => onHandleChange(e, index, obj)}/></th>
                <td className="list-section">
                  <li class="list-item">{obj.questionString}
                    <span class="list-item-detail">
                        <span>Function: {obj.topic}</span>
                        <span>Difficulty: {obj.difficulty}</span>
                      </span>
                  </li>
                </td>
              </tr>
            </Row>
          )}

          {/*<Row>*/}
          {/*  <Col>*/}
          {/*    <Button value={"Continue"} onClick={onButtonClick} className="process-button"> Continue </Button>*/}
          {/*  </Col>*/}
          {/*</Row>*/}
          </tbody>
        </Table>
      </Container>
      <Container className="container d-flex flex-column align-items-lg-center col-lg-5 h-100 container-right">
        <Row className="greet-msg m-3">Make an Exam</Row>

        <NewExamMaker questionList={checkList}/>
      </Container>
    </Container>









    // <Grid>
    //   {!submit ?
    //     <>
    //       <h1 className="exam-header">Select Questions</h1>
    //     <Table className="table-bordered">
    //       <tbody>
    //
    //       {list.map((obj, index) => <Row className="questions-rows">
    //           <tr>
    //             <th style={{"width": "50px"}}><input type={"Checkbox"} name={obj} checked={checkedState[index]}
    //                        onChange={e => onHandleChange(e, index, obj)}/></th>
    //             <td className="list-section">
    //               <li class="list-item">{obj.questionString}
    //               <span class="list-item-detail">
    //                 <span>Function: {obj.topic}</span>
    //                 <span>Difficulty: {obj.difficulty}</span>
    //               </span>
    //               </li>
    //               </td>
    //           </tr>
    //         </Row>
    //       )}
    //
    //       <Row>
    //         <Col>
    //           <Button value={"Continue"} onClick={onButtonClick}> Continue </Button>
    //         </Col>
    //       </Row>
    //       </tbody>
    //     </Table>
    //     </>
    //     :
    //     <NewExamMaker questionList={checkList}/>
    //   }
    // </Grid>
  );
};

export default FilterSelectedQuestions;