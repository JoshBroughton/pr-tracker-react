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
          <Button className={'my-button'} onClick={setLift} label="Squat"/>
          <Button className={'my-button'} onClick={setLift} label="Bench"/>
          <Button className={'my-button'} onClick={setLift} label="Deadlift"/>
          <h2>Select View</h2>
          <Button className={'my-button'} onClick={setView} label="Table"/>
          <Button className={'my-button'} onClick={setView} label="Graph"/>
          <Button className={'my-button'} onClick={setView} label="Calculator"/>
        </div>
      </div>
    </>   
  )
}

export default Sidebar;