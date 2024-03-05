import { createStore } from "redux";

const reducer = (state = { counter: 0 }, action) => {
  //! Limitation for react reducer function
  //! 1. Synchronous function
  //! 2. We should not mutate the original state

  if (action.type === "INC") {
    return { counter: state.counter+1 };
  }
  if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }
  return state;
};
const store = createStore(reducer);
export default store;
