import React, { useState, useEffect } from "react";
import './Home.css'
import Table from "../Table/Table";
import Sidebar from "../Sidebar/Sidebar";
import AddLift from "../AddLift/AddLift";

interface LiftRecord {
  reps: number;
  weight: number;
  date: string;
  e1rm: number;
}

function Home() {
  const [rowData, setRowData] = useState<LiftRecord[]>();
  const [lift, setLift] = useState<String>('Squat');

  useEffect(() => {
    fetch('/lifts')
      .then((response) => response.json())
      .then((data) => {
        console.log(data[`${lift}`])
        setRowData(data[`${lift}`])});
  }, [lift])

  return(
    <div className="main-container">
      <Sidebar setLift={setLift}/>
      <div className="content-container">
        <h2 className="heading">{ lift }</h2>
        <h3 className="heading">Current e1rm: inject here</h3>
        <Table rowData={rowData}/>
        <AddLift />
      </div>
    </div>
  )
}

export default Home;