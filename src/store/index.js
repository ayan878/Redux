import { createStore } from "redux";

const reducer = (state = { counter: 0 }, action) => {
  //! Limitation for react reducer function
  //! 1. Synchronous function
  //! 2. We should not mutate the original state

  switch (action.type) {
    case "INC":
      return { counter: state.counter + 1 };
    case "DEC":
      return { counter: state.counter - 1 };
    case "ADD":
      return { counter: state.counter + action.payload };
    default:
      return state;
  }
}
const store = createStore(reducer);
export default store;
