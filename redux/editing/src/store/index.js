import { createStore, combineReducers } from "redux";
import serviceListReducer from "../reducers/seriviceList";
import  serviceAddReducer from "../reducers/seriviceAdd";

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd:  serviceAddReducer,
});

const store = createStore(
  reducer
);

export default store;