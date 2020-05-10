import {actionTypes} from '../actionTypes';
const initialState = {
  input: '',
  loader: false,
  data: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_INPUT_DATA: {
      return {...state, input: action.payload};
    }
    case actionTypes.ITEMS_LOADING: {
      return {...state, loader: action.payload};
    }
    case actionTypes.SET_DATA: {
      return {...state, data: action.payload};
    }
    default:
      return state;
  }
};
