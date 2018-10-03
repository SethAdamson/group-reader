import axios from 'axios';
import _ from 'lodash';

const initialState = {
  user: undefined,
  allByCategory: [],
};

const FULFILLED = '_FULFILLED';
const GET_ALL_BY_CATEGORY = 'GET_ALL_BY_CATEGORY';

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_BY_CATEGORY + FULFILLED:
      return Object.assign({}, state, { allByCategory: payload });
    default:
      return state;
  }
}

export function getAllByCategory() {
  const mainCategory = axios
    .get('/api/getGroupsByCategory')
    .then(res => res.data)
    .catch(e => console.log(e));
  return {
    type: GET_ALL_BY_CATEGORY,
    payload: mainCategory,
  };
}
