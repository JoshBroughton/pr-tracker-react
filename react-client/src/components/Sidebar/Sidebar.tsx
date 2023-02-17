import React from "react";
import Button from "../Button/Button";
import './Sidebar.css';

interface SidebarProps {
  setLift: (lift: string) => void;
}

function Sidebar(props:SidebarProps) {
  const setLift = props.setLift
  return(
    <>
      <div className="sidebar">
        <div className="button-flex">
          <h2>Select Lift</h2>
          <Button setLift={setLift} label="Squat"/>
          <Button setLift={setLift} label="Bench"/>
          <Button setLift={setLift} label="Deadlift"/>
        </div>
      </div>
    </>   
  )
}

export default Sidebar;