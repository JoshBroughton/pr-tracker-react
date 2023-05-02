import React from 'react';
import "./Table.css";
import { LiftRecord } from '../Home/Home';

interface TableProps {
  rowData: LiftRecord[] | undefined;
  userID: string | undefined;
  lift: string;
  newData: boolean;
  setNewData: (newData:boolean) => void;
}

let url:string | undefined;
if (process.env.NODE_ENV === 'development') {
  url = process.env.REACT_APP_LOCAL_URL;
} else {
  url = process.env.REACT_APP_PROD_URL;
}

function Table(props:TableProps) {
  const rowData = props.rowData
  rowData?.sort((a, b) => {
    return a.reps - b.reps;
  })

  const deleteItem = async (e:React.BaseSyntheticEvent) => {
    try {
      fetch(url + "/delete_lift", {
        method: "POST",
        body: JSON.stringify({
          id: e.target.value,
          user_id: props.userID,
          lift_type: props.lift,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        props.newData ? props.setNewData(false) : props.setNewData(true)
      })
      .then(data => data)
    } catch (err) {
      console.log(err);
    }
  };

  function mapRow(row:LiftRecord):React.ReactElement {
    return(
      <tr key={row.reps}>
        <td>{row.reps}</td>
        <td>{row.weight}</td>
        <td>{Number(row.estimated_max).toFixed(2)}</td>
        <td>{(new Date(row.date)).toDateString().substring(4)}</td>
        <td><button name="delete" onClick={deleteItem} value={row.id}>Delete</button></td>
      </tr>
    )
  };

  let rows;
  if (rowData) {
    rows = rowData.map(mapRow);
  }


  return(
    <table>
      <thead>
        <tr>
          <th>Reps</th>
          <th>Weight</th>
          <th>E1RM</th>
          <th>Date</th>
          <th>DELETE</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default Table;
