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
  const changeView = (value:string):void => {
    const values = value.split('_');
    const lift = values[0];
    const view = values[1];
    setView(view);
    setLift(lift);
    setSidebar(false);
  }

  return(
    <>
      <div className={sidebar ? "sidebar" : "hidden"}>
        <div className="button-flex">
          <h2>Squat</h2>
          <Button className={'my-button'} value="Squat_Table" onClick={changeView} label="Table"/>
          <Button className={'my-button'} value="Squat_Graph" onClick={changeView} label="Graph"/>
          <Button className={'my-button'} value="Squat_Calculator" onClick={changeView} label="Calculator"/>
          <h2>Bench</h2>
          <Button className={'my-button'} value="Bench_Table" onClick={changeView} label="Table"/>
          <Button className={'my-button'} value="Bench_Graph" onClick={changeView} label="Graph"/>
          <Button className={'my-button'} value="Bench_Calculator" onClick={changeView} label="Calculator"/>
          <h2>Deadlift</h2>
          <Button className={'my-button'} value="Deadlift_Table" onClick={changeView} label="Table"/>
          <Button className={'my-button'} value="Deadlift_Graph" onClick={changeView} label="Graph"/>
          <Button className={'my-button'} value="Deadlift_Calculator" onClick={changeView} label="Calculator"/>
        </div>
      </div>
    </>
  )
}

export default Sidebar;
