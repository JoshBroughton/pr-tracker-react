import React, { useState, useEffect } from 'react';
import "./Table.css";

interface LiftRecord {
  reps: number;
  weight: number;
  date: string;
  e1rm: number;
}

interface TableProps {
  rowData: LiftRecord[] | undefined;
}

function Table(props:TableProps) {
  const rowData = props.rowData
  function mapRow(row:LiftRecord):React.ReactElement {
    return(
      <tr>
        <td>{row.reps}</td>
        <td>{row.weight}</td>
        <td>{row.e1rm}</td>
        <td>{row.date}</td>
      </tr>
    )
  };

  let rows;
  if (rowData) {
    rows = rowData.map(mapRow);
  }
  

  return(
    <table className='table-auto'>
      <thead>
        <th>Reps</th>
        <th>Weight</th>
        <th>Estimated 1-Rep Max</th>
        <th>Date</th>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default Table;