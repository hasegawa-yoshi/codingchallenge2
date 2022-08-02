import { createStore as reduxCreateStore } from "redux";
import { rootReducer } from "../latlng/reducers";

export default function createStore() {
  return reduxCreateStore(rootReducer);
}
