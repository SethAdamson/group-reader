import axios from 'axios';
import _ from 'lodash';

let initialState = {
    user: undefined,
};

const GET_GROUPS_BY_CATEGORY = 'GET_GROUPS_BY_CATEGORY';

export default function reducer(state = initialState, action){
    let {type, payload} = action;
    switch (type){

        case GET_GROUPS_BY_CATEGORY:
            return Object

        default:
            return state;
    }
}