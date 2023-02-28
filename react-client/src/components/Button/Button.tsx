import React from "react";
import './Button.css'

interface ButtonProps {
  rowId?: number,
  className: string,
  label: string
  onClick: (lift: string) => void;
}

function Button({ className, label, onClick }: ButtonProps) {
 
  return(
    <button className={className} onClick={() => {onClick(label)}}>{ label }</button>
  ) 
}

export default Button;