import { all, call } from 'redux-saga/effects';
import userDataSaga from './userSaga';
function* rootSaga(){
    yield all([
        call(userDataSaga)
    ])
}
export default rootSaga