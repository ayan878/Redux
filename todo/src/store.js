import { createStore } from "redux";

// Initial state
const initialState = {
  todos: [],
};

// Action creators
const addTodo = (todo) => ({
  type: 'addTodo',
  payload: todo,
});

const removeTodo = (id) => ({
  type: 'removeTodo',
  payload: id,
});

// Reducer function
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "removeTodo":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

const store = createStore(todoReducer);
export default store;
