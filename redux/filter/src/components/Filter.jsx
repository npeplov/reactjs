import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
  const dispatch = useDispatch();
  const filterString = useSelector(state => state.serviceFilter)

  const handleChange = (e) => {
    const {value} = e.target;
    dispatch({ type: 'FILTER_SERVICES', payload: value })
  }
  return (
    <div>
      <input value={filterString} onChange={handleChange} placeholder="Поиск"></input>
    </div>
  );
}
