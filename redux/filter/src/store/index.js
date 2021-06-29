import { createStore, combineReducers } from "redux";
import serviceListReducer from "../reducers/seriviceList";
import serviceAddReducer from "../reducers/seriviceAdd";
import serviceListFilter from "../reducers/serviceFilter";

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd:  serviceAddReducer,
  serviceFilter: serviceListFilter,
});

const store = createStore(
  reducer
);

export default store;