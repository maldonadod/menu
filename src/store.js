import { createStore, combineReducers } from "redux";

const initialState = {
  menu: [],
  isLoading: false
}

function appReducer(state = initialState, action) {
  return reducers[action.type]
    ? reducers[action.type](state, action)
    : state
}

const reducers = {
  FETCH_MENU_LOADING(state, action) {
    return {
      ...state,
      isLoading: true
    }
  },
  FETCH_MENU_SUCCESS(state, action) {
    return {
      menu: action.payload,
      isLoading: false
    }
  },
  ORDER_CONFIRM_SUCCESS(state, action) {
    return {
      ...state,
      hasOrder: true
    }
  }
}

const store = createStore(
  combineReducers({
    app: appReducer
	})
);

export default store