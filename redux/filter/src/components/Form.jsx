import React from "react";
import { useDispatch, useSelector } from 'react-redux';

export default function Form() {
  const item = useSelector(state => state.serviceAdd)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const {name, value} = e.target;
    dispatch({ type: 'EDIT_FORM_FIELD', payload: {[name]: value} })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.id)
      {
        console.log(item);
        dispatch({type: 'UPDATE_SERVICE', payload: item})
      }
      
    else if (item.title && item.price) {
      dispatch({type: 'ADD_SERVICE', payload: item});
      handleClear();
    }
  };

  const handleClear = () => {
    dispatch({type: 'CLEAR_FORM'})
  }

  return (
    <form action="submit" onSubmit={handleSubmit} onReset={handleClear}>
      <input value={item.title} type="text" name="title" onChange={handleChange} placeholder="Название"/>
      <input value={item.price} type="number" name="price" onChange={handleChange} placeholder="Стоимость"/>
      <button type="submit">save</button>
      <button type="reset">cancel</button>
    </form>
  );
}

// 1. структура данных
// 2. редюсер
// 3. store
// 4. provider
// 5. useSelector, useDispatch