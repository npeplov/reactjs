// при сохранении редактированного сервиса

const initialState = {
  title: '',
  price: ''
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case 'EDIT_FORM_FIELD':
      const {...key} = action.payload;
      return { ...state, ...key };
    default:
      return state;
  }
}