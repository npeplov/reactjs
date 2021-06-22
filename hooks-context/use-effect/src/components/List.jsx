import React from 'react';

export default function List({item, callback}) {

  const handleSelect = (item) => {
    // в Details передаются props: info (объект с полями id и name)
    callback(item);
  }

  return (
    <li onClick={() => handleSelect(item)}>
      {item.name}
    </li>
  )
}
