import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Home.css'
import Table from "../Table/Table";
import Sidebar from "../Sidebar/Sidebar";
import AddLift from "../AddLift/AddLift";

interface LiftRecord {
  reps: number;
  weight: number;
  date: string;
  estimated_max: number;
}

function Home() {
  const [rowData, setRowData] = useState<LiftRecord[]>();
  const [lift, setLift] = useState<string>('Squat');
  const [newData, setNewData] = useState<boolean>(false);
  const { user } = useAuth0();

  useEffect(() => {
    fetch('/lifts', {
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
        console.log(data)
        setRowData(data)});
  }, [lift, newData, user])

  let e1rm = 0;
  rowData?.forEach((lift) => {
    if (lift.estimated_max > e1rm) {
      e1rm = lift.estimated_max;
    }
  })
  return(
    <div className="main-container">
      <Sidebar setLift={setLift}/>
      <div className="content-container">
        <h2 className="heading">{ lift }</h2>
        <h3 className="heading">Best e1rm: { Number(e1rm).toFixed(2) }</h3>
        <Table rowData={rowData}/>
        <AddLift lift={lift} newData={newData} setNewData={setNewData}/>
      </div>
    </div>
  )
}

export default Home;