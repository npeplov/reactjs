import React, { useState } from 'react'


const dropdownItems = [
  "Profile Information",
  "Change Password",
  "Become PRO",
  "Help",
  "Log Out",
];

export default function DropdownList({ open }) {

  let [active, changeState] = useState(false);

  function toggleActive(e, item) {
    e.preventDefault();
    changeState(active = item);
  }

  return (
    <ul className="dropdown">
      <div className={open ? "dropdown-open" : null }></div>
      {open
        ? dropdownItems.map((item) => (
            <li key={item} style={ item === active ? { color: "#5380F7"} : null } > 
              <a href="/" onClick={(e) => toggleActive(e, item)}>{item}</a>
            </li>
          ))
        : null}
    </ul>
  );
}
