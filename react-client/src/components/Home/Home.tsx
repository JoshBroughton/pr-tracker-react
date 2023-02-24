import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Home.css'
import Table from "../Table/Table";
import Sidebar from "../Sidebar/Sidebar";
import AddLift from "../AddLift/AddLift";
import Calculator from "../Calculator/Calculator";

let url:string | undefined;
if (process.env.NODE_ENV === 'development') {
  url = process.env.REACT_APP_LOCAL_URL;
} else {
  url = process.env.REACT_APP_PROD_URL;
}

export interface LiftRecord {
  reps: number;
  weight: number;
  date: string;
  estimated_max: number;
}

function Home() {
  const [rowData, setRowData] = useState<LiftRecord[]>([]);
  const [e1rm, setE1rm] = useState<number>(0);
  const [lift, setLift] = useState<string>('Squat');
  const [newData, setNewData] = useState<boolean>(false);
  const [view, setView] = useState<string>('Table');
  const { user } = useAuth0();

  useEffect(() => {
    fetch((url + '/lifts'), {
      method: "POST",
      body: JSON.stringify({
        user_id: user?.sub,
        lift_type: lift,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setE1rm(0);
        setRowData(data)});
  }, [lift, newData, user, view])

  rowData?.forEach((lift) => {
    if (lift.estimated_max > e1rm) {
      setE1rm(lift.estimated_max);
    }
  })

  let content;
  if (view === 'Table' && rowData.length !== 0) {
    content = (
    <div className="content-container">
      <h2 className="heading">{ lift }</h2>
      <h3 className="heading">Best e1rm: { Number(e1rm).toFixed(2) }</h3>
      
      <Table rowData={rowData}/>
      <AddLift lift={lift} newData={newData} setNewData={setNewData}/>
    </div>
    )
  } else if (view === 'Calculator') {
    content = (
    <div className="content-container">
      <Calculator lift={lift} rowData={rowData} e1rm={e1rm} />
    </div>
    )
  } else {
    content = (
    <div className="content-container">
      <h2 className="heading">{ lift }</h2> 
      <AddLift lift={lift} newData={newData} setNewData={setNewData}/> 
    </div>
    )
  }

  return(
    <div className="main-container">
      <Sidebar setView={setView} setLift={setLift}/>
      <div className="grid-sub-container">
        {content}
      </div>
    </div>
  )
}

export default Home;