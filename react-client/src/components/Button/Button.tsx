import React from "react";
import './Button.css'

interface ButtonProps {
  label: string
  actionMethod: () => void;
}

function Button({label, actionMethod}: ButtonProps) {
 
  return(
    <button className="my-button" onClick={actionMethod}>{ label }</button>
  ) 
}

export default Button;