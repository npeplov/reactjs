import React, { useState } from 'react'
import DropdownList from './DropdownList'

export default function Dropdown() {

  let [open, changeState] = useState(true);

  function toggleOpen() {
    changeState(!open);
  }

  return (
    <div className="Dropdown dropdown-wrapper open">
      <button onClick={toggleOpen}>
        <span>Account settings</span>
        <i className="material-icons">public</i>
      </button>
      <DropdownList open={open}/>
    </div>
  )
}
