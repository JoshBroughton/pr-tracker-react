import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Home.css'
import Table from "../Table/Table";
import Sidebar from "../Sidebar/Sidebar";
import AddLift from "../AddLift/AddLift";
import Calculator from "../Calculator/Calculator";
import Graph from "../Graph/Graph";

let url:string | undefined;
if (process.env.NODE_ENV === 'development') {
  url = process.env.REACT_APP_LOCAL_URL;
} else {
  url = process.env.REACT_APP_PROD_URL;
}

export interface LiftRecord {
  id: number;
  reps: number;
  weight: number;
  date: string;
  estimated_max: number;
}

interface homeProps {
  sidebar: boolean,
}

function Home({sidebar}:homeProps) {
  const [rowData, setRowData] = useState<LiftRecord[]>([]);
  const [e1rm, setE1rm] = useState<number>(0);
  const [lift, setLift] = useState<string>('Squat');
  const [newData, setNewData] = useState<boolean>(false);
  const [view, setView] = useState<string>('Table');
  const [userID, setUserID] = useState<string | undefined>("auth0|63eebad1df31b1e61b3a1d5c") //so that some default data displays to visitors
  const { user } = useAuth0();

  const fetchData = () => {
    fetch((url + '/lifts'), {
      method: "POST",
      body: JSON.stringify({
        user_id: userID,
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
        if (user?.sub) {
          setUserID(user?.sub);
        }
      }

  useEffect(fetchData, [lift, newData, userID, view, user])



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

      <Table newData={newData} setNewData={setNewData} userID={userID} lift={lift} rowData={rowData}/>
      <AddLift lift={lift} newData={newData} setNewData={setNewData}/>
    </div>
    )
  } else if (view === 'Calculator') {
    content = (
    <div className="content-container">
      <Calculator lift={lift} rowData={rowData} e1rm={e1rm} />
    </div>
    )
  } else if (view === 'Graph') {
    content = (
    <div className="content-container">
      <h2 className="heading">{ lift }</h2>
      <Graph lift={lift} userID={userID} />
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

  if (sidebar) {
    return(
      <div className="main-container">
        <Sidebar setView={setView} setLift={setLift}/>
      </div>
    )
  } else {
    return(
      <div className="main-container">
        <div className="grid-sub-container">
          {content}
        </div>
      </div>
    )
  }
}

export default Home;
