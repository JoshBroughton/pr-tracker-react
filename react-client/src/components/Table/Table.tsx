import React, { useState, useEffect } from 'react';
import "./Table.css";


interface LiftRecord {
  reps: number;
  weight: number;
  date: string;
  e1rm: number;
}

function Table() {
  const [rowData, setRowData] = useState<LiftRecord[]>();

  useEffect(() => {
    fetch('/lifts')
      .then((response) => response.json())
      .then((data) => {
        console.log(data['squats'])
        setRowData(data['squats'])});
  }, [])

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