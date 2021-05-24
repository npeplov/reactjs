import React from "react";

export default function IconSwitch({icon, onSwitch}) {
  return (
    <div className='IconSwitch'>
      <span onClick={() => onSwitch(icon)} className="material-icons">{icon}</span>
    </div>
  );
}
