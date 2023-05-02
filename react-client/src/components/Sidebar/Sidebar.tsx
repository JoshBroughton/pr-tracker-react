import React from "react";
import Button from "../Button/Button";
import './Sidebar.css';

interface SidebarProps {
  sidebar: boolean,
  setSidebar: (newSidebar: boolean) => void
  setLift: (lift: string) => void,
  setView: (view: string) => void
}

function Sidebar({sidebar, setLift, setView, setSidebar}:SidebarProps) {
  const changeLift = (lift:string):void => {
    setLift(lift);
    setSidebar(false);
  }

  const changeView = (view:string):void => {
    setView(view);
    setSidebar(false);
  }

  return(
    <>
      <div className={sidebar ? "sidebar" : "hidden"}>
        <div className="button-flex">
          <h2>Select Lift</h2>
          <Button className={'my-button'} onClick={changeLift} label="Squat"/>
          <Button className={'my-button'} onClick={changeLift} label="Bench"/>
          <Button className={'my-button'} onClick={changeLift} label="Deadlift"/>
          <h2>Select View</h2>
          <Button className={'my-button'} onClick={changeView} label="Table"/>
          <Button className={'my-button'} onClick={changeView} label="Graph"/>
          <Button className={'my-button'} onClick={changeView} label="Calculator"/>
        </div>
      </div>
    </>
  )
}

export default Sidebar;
