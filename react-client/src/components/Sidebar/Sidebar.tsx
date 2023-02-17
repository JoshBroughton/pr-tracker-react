import React from "react";
import Button from "../Button/Button";
import './Sidebar.css';

function Sidebar() {
  return(
    <>
      <div className="sidebar">
        <div className="button-flex">
          <h2>Select Lift</h2>
          <Button actionMethod={() => {}} label="Squat"/>
          <Button actionMethod={() => {}} label="Bench"/>
          <Button actionMethod={() => {}} label="Deadlift"/>
        </div>
      </div>
    </>   
  )
}

export default Sidebar;