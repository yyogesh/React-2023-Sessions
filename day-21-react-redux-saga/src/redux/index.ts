import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import counterReducer from './counterSlice';
import logger from 'redux-logger';
import mySaga from "./saga";
import userReducer from './reducer';

const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
  middleware: [logger, sagaMiddleWare]
})

sagaMiddleWare.run(mySaga);

export default store;