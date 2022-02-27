import {USER_API_REQUEST, USER_API_SUCCESS, USER_API_FAIL} from '../ActionTypes/ApidataType';

const ApidataReducer = (state = {data: []}, action) => {
    switch (action.type) {
        case USER_API_REQUEST:
            return {...state, data: []}
        case USER_API_SUCCESS:
            return {...state, data: action.payload}
        case USER_API_FAIL:
            return {...state, fail: action.payload}



        default:
            return state;


    }

}

export default ApidataReducer;