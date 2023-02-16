import React from "react";
import './Home.css'
import Table from "../Table/Table";

function Home() {
  return(
    <div className="main-container">
      <h2 className="heading">Squat load this dynamically</h2>
      <h3 className="heading">Current e1rm: inject here</h3>
      <Table />
    </div>
  )
}

export default Home;