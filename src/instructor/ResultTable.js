import React, { useEffect, useState } from "react";
import {Table} from 'react-bootstrap'

const  ResultTable = ({ index, tests, expected, actual, points, total }) => {
  return(
      <tr>
        <th>{tests[index]}</th>
        <th>{expected[index]}</th>
        <th>{actual[index]}</th>
        <th>{points[index]}</th>
        <th>Update</th>
      </tr>


  )
}

export default ResultTable