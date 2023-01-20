export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...initialState, action.payload];

    case "DELETE":
      return initialState.filter((todo) => todo.id !== action.payload);
    case "DONE":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });

    default:
      break;
  }
};
