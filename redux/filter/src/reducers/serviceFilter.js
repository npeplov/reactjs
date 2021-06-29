const initialState = '';

export default function serviceListFilter(state = initialState, action) {
  switch (action.type) {
    case 'FILTER_SERVICES':
      const filterString = action.payload
      return filterString;
    default:
      return state;
  }
}

// if (action.payload.title) {
//   return state.filter(item => item.title.includes(action.payload.title))
// }