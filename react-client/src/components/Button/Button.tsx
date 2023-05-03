import React from "react";
import './Button.css'

interface ButtonProps {
  rowId?: number,
  className: string,
  value: string,
  label: string
  onClick: (lift: string) => void;
}

function Button({ className, label, value, onClick }: ButtonProps) {

  return(
    <button className={className} onClick={() => {onClick(value)}}>{ label }</button>
  )
}

export default Button;
