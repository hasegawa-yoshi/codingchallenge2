import * as Actions from "./actions";
import { LatLngInitialState } from "../store/initialState";
import { combineReducers } from "redux";

export const LatLngReducer = (state = LatLngInitialState, action: any) => {
  switch (action.type) {
    case Actions.LAT_LNG:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  LatLngReducer,
});
