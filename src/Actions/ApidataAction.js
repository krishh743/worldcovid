import axios from 'axios';
import {USER_API_REQUEST, USER_API_SUCCESS, USER_API_FAIL} from '../ActionTypes/ApidataType';


const apiDataAction = () => async (dispatch) => {

    try {
        dispatch({type: USER_API_REQUEST})

        const response = await axios.get('https://jsonplaceholder.typicode.com/users')

        dispatch({type: USER_API_SUCCESS, payload: response})

    } catch (error) {
        dispatch({type: USER_API_FAIL, payload: error})
    }

}
export default apiDataAction;