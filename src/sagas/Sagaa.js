// import {call,put,takeEvery} from 'redux-saga/effects';
// import {GET_USER_FETCH,GET_USER_SUCCESS} from '.action';

// function userData(){
// return fetch('http://jsonplaceholder.typicode.com/todos').then(resp=>resp.json());
// }

// function* getDataFromApi(){
// const randomData=yield call(userData);
// yield put({type:GET_USER_SUCCESS,randomData})
// }
// function* mySaga(){
// yield takeEvery(GET_USER_FETCH,getDataFromApi)
// }
// export default Sagaa;