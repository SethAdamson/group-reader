import axios from 'axios';
import _ from 'lodash';

let initialState = {
    user: undefined,
};

export default function reducer(state = initialState, action){
    let {type, payload} = action;
    switch (type){
        default:
            return state;
    }
}