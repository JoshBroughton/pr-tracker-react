import React from "react";
import './Button.css'

interface ButtonProps {
  label: string
  setLift: (lift: string) => void;
}

function Button({label, setLift}: ButtonProps) {
 
  return(
    <button className="my-button" onClick={() => {setLift(label)}}>{ label }</button>
  ) 
}

export default Button;