const initialState = {
  title: '',
  price: ''
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case 'EDIT_FORM_FIELD':
      const {...key} = action.payload;
      return { ...state, ...key };
    case 'EDIT_SERVICE':
      const {id, title, price} = action.payload;
      return {id, title, price};
    case 'CLEAR_FORM':
      return {title: '', price: ''}
    default:
      return state;
  }
}