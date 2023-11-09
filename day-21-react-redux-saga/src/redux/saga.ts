import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_USER_FETCH, GET_USER_SUCCESS } from './actions';
//Creates an Effect description that instructs the middleware to dispatch an action to the Store. 
//This effect is non-blocking, any errors that are thrown downstream (e.g. in a reducer) 
// will bubble back into the saga.
function userFetch() {
    return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
}

function* getUserFetch() {
    const user: Promise<any> = yield call(userFetch);
    yield put({type: GET_USER_SUCCESS, user});
}

function* mySaga() {
    yield takeEvery(GET_USER_FETCH, getUserFetch);
}

export default mySaga;