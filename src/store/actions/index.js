import {actionTypes} from '../actionTypes';

export const saveInputData = payload => {
  return {
    type: actionTypes.SAVE_INPUT_DATA,
    payload: payload,
  };
};

export const itemsIsLoading = payload => {
  return {
    type: actionTypes.ITEMS_LOADING,
    payload: payload,
  };
};

export const setData = payload => {
  return {type: actionTypes.SET_DATA, payload: payload};
};

export const getDemonstartionDetails = num => {
  return dispatch => {
    dispatch(itemsIsLoading(true));
    fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
      .then(response => response.json())
      .then(json => {
        dispatch(setData(json));
        dispatch(itemsIsLoading(false));
      })
      .catch(err => {
        console.log('err', err);
        alert('Could not fetch data');
        dispatch(itemsIsLoading(false));
      });
  };
};
