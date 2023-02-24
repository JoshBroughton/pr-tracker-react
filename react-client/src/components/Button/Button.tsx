import React from "react";
import './Button.css'

interface ButtonProps {
  label: string
  onClick: (lift: string) => void;
}

function Button({label, onClick}: ButtonProps) {
 
  return(
    <button className="my-button" onClick={() => {onClick(label)}}>{ label }</button>
  ) 
}

export default Button;