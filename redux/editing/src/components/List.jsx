import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export default function List() {
  const items = useSelector(store => store.serviceList);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch({type: 'REMOVE_SERVICE', payload: id})
  }

  const handleEdit = (id) => {
    // dispatch({type: 'EDIT_SERVICE', payload: id})
    console.log(id);
  }

  return (
    <ul>
      {items && items.map((item) => (
        <li key={item.id}>
          <div>{item.title}</div>
          <div>{item.price}</div>
          <div>
            <button onClick={() => handleEdit(item.id)}>E</button>
            <button onClick={() => handleRemove(item.id)}> X</button>
            </div>
        </li>
      ))}
    </ul>
  );
}
