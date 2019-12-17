import { createStore, combineReducers } from "redux";

function appReducer(state = { menu: [] }, action) {
  if (action.type === "FETCH_MENU") {
    return {
      menu: action.payload
    }
  }
  return state
}

const store = createStore(
  combineReducers({
    app: appReducer
	})
);

export default store