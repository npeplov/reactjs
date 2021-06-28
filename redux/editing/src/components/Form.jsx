import React from "react";
import { useDispatch, useSelector } from 'react-redux';

export default function Form() {
  const dispatch = useDispatch();
  const item = useSelector(state => state.serviceAdd)

  const selected = useSelector(state => state.serviceList)
  console.log(selected);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_SERVICE', payload: item});
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    dispatch({ type: 'EDIT_FORM_FIELD', payload: {[name]: value} })
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input value={item.title} type="text" name="title" onChange={handleChange} placeholder="Название"/>
      <input value={item.price} type="number" name="price" onChange={handleChange} placeholder="Стоимость"/>
      <button type="submit">save</button>
    </form>
  );
}

// 1. структура данных
// 2. редюсер
// 3. store
// 4. provider
// 5. useSelector, useDispatch