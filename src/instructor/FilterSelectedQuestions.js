import React, { useState } from "react";
import { Col, Row, Grid } from "react-flexbox-grid";
import NewExamMaker from "./RenderExamMaker";
import { Table, Container, Button } from "react-bootstrap";

const FilterSelectedQuestions = (props) => {
  const list = props.questionList;

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
    <Grid>
      {!submit ?
        <>
        <h1 className="exam-header">Select Questions</h1>
        <Table className="table-bordered">
          <tbody>

          {list.map((obj, index) => <Row className="questions-rows">
              <tr>
                <th style={{"width": "50px"}}><input type={"Checkbox"} name={obj} checked={checkedState[index]}
                           onChange={e => onHandleChange(e, index, obj)}/></th>
                <td>{obj.questionString}</td>
              </tr>
            </Row>
          )}

          <Row>
            <Col>
              <Button value={"Continue"} onClick={onButtonClick}> Continue </Button>
            </Col>
          </Row>
          </tbody>
        </Table>
        </>
        :
        <NewExamMaker questionList={checkList}/>
      }
    </Grid>
  );
};

export default FilterSelectedQuestions;