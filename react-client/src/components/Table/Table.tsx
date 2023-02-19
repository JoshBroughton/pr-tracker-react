import React from 'react';
import "./Table.css";

interface LiftRecord {
  reps: number;
  weight: number;
  date: string;
  estimated_max: number;
}

interface TableProps {
  rowData: LiftRecord[] | undefined;
}

function Table(props:TableProps) {
  const rowData = props.rowData
  function mapRow(row:LiftRecord):React.ReactElement {
    return(
      <tr key={row.reps}>
        <td>{row.reps}</td>
        <td>{row.weight}</td>
        <td>{Number(row.estimated_max).toFixed(2)}</td>
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
        <tr>
          <th>Reps</th>
          <th>Weight</th>
          <th>Estimated 1-Rep Max</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default Table;