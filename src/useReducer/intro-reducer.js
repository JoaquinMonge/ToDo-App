const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del Alma",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "add") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del poder",
  done: false,
};

const addTodoAction = {
  type: "add",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

//MALA PRACTICA, no se debe mutar asi
// todos.push({
//     id: 2,
//     todo: "Recolectar la piedra del poder",
//     done: false,
// })

console.log(todos);
