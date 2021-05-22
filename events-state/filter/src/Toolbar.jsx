import React from "react";

function Toolbar({ filters, selected }) {
  return (
    <div>
      <ul className="Toolbar">
        {filters.map((item) => {
          return (
            <li key={item} className={item === selected ? "selected" : null}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Toolbar;
