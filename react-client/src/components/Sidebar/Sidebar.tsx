import React from "react";
import Button from "../Button/Button";
import './Sidebar.css';

interface SidebarProps {
  setLift: (lift: string) => void,
  setView: (view: string) => void
}

function Sidebar({setLift, setView}:SidebarProps) {
  return(
    <>
      <div className="sidebar">
        <div className="button-flex">
          <h2>Select Lift</h2>
          <Button onClick={setLift} label="Squat"/>
          <Button onClick={setLift} label="Bench"/>
          <Button onClick={setLift} label="Deadlift"/>
          <h2>Select View</h2>
          <Button onClick={setView} label="Table"/>
          <Button onClick={setView} label="Graph"/>
          <Button onClick={setView} label="Calculator"/>
        </div>
      </div>
    </>   
  )
}

export default Sidebar;