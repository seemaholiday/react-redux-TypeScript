import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducerSlice from './redux/reducers/userReducer';
import rootSaga from './saga/rootSaga';
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer:{
        users:userReducerSlice,
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)

