import React, { useEffect, useState } from "react";
import {Table} from 'react-bootstrap'

const  ResultTable = ({ index, tests, expected, actual, points, total, updater }) => {
  //console.log( index, tests, expected, actual, points, total);
  return(
      <tr>
        <th scope="row">{tests[index]}</th>
         {expected[index] === true && <td>true</td>}
         {expected[index] === false && <td>False</td>}
         {expected[index] !== true && expected[index] !== false && <td>{expected[index]}</td>}
         {actual[index] === true && <td>true</td>}
         {actual[index] === false && <td>False</td>}
         {actual[index] !== true && actual[index] !== false && <td>{actual[index]}</td>}
        <td>{points[index]}</td>
        <td>{total[index]}</td>
        <td><input  placeholder={"Update Point"} onChange={e=>updater(index, e.target.value)}/></td>
      </tr>


  )
}

export default ResultTable

// {expected[index] === true && <td>true</td>}
// {expected[index] === false && <td>False</td>}
// {expected[index] !== true && expected[index] !== false && <td>{expected[index]}</td>}
// {actual[index] === true && <td>true</td>}
// {actual[index] === false && <td>False</td>}
// {actual[index] !== true && actual[index] !== false && <td>{actual[index]}</td>}