import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const useTodo = () => {
  const init = () => {
    //si es nulo returna una rarreglo vacio
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const initialState = [];
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "ADD",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "DELETE",
      payload: id,
    };
    dispatch(action);
  };
  const handleToggleTodo = (id) => {
    const action = {
      type: "DONE",
      payload: id,
    };
    dispatch(action);
  };

  return {
    todos,
    initialState,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
  };
};
