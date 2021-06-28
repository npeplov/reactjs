import { nanoid } from "nanoid";

const initialState = [
  { id: nanoid(), title: 'Диагностика', price: 0 },
  { id: nanoid(), title: 'Замена стекла', price: 21000 },
  { id: nanoid(), title: 'Замена дисплея', price: 25000 }
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SERVICE':
      const {title, price} = action.payload;
      return [...state, {id: nanoid(), title, price}];
    case 'REMOVE_SERVICE':
      const id = action.payload;
      return state.filter(item => item.id !== id)
    case 'UPDATE':
      const service = action.payload
      const immutable = state.filter(item => item.id !== service.id)
      return [...immutable, service]
    default:
      return state;
  }
}
