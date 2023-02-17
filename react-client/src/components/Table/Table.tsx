import React, { useState, useEffect } from 'react';
import "./Table.css";


interface LiftRecord {
  reps: number;
  weight: number;
  date: Date;
  e1rm: number;
}

const data: LiftRecord[] = [
  {
    reps: 1,
    weight: 445,
    date: new Date(),
    e1rm: 445, 
  },
  {
    reps: 2,
    weight: 405,
    date: new Date(),
    e1rm: 435,
  }
]

function Table() {
  const [rowData, setRowData] = useState<LiftRecord[]>(data);

  useEffect(() => {
    fetch('/lifts')
      .then((response) => response.json())
      .then((data) => console.log(data['squats']));
  }, [])

  function mapRow(row:LiftRecord):React.ReactElement {
    return(
      <tr>
        <td>{row.reps}</td>
        <td>{row.weight}</td>
        <td>{row.e1rm}</td>
        <td>{row.date.toDateString()}</td>
      </tr>
    )
  };
  let rows = rowData.map(mapRow);

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