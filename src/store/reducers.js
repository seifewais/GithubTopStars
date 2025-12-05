import { combineReducers } from "redux";
import reposReducer from "./repos/reducer";

export default combineReducers({
    repos: reposReducer,
});