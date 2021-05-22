import React from "react";

function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div>
      <ul className="Toolbar">
        {filters.map((item) => {
          return (
            <li
              onClick={() => onSelectFilter(item)}
              key={item}
              className={item === selected ? "selected" : null}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Toolbar;
