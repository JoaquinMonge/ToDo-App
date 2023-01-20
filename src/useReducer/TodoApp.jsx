import { ToDoAdd } from "./ToDoAdd";
import { ToDoList } from "./ToDoList";

import { useTodo } from "./useTodo";

export const TodoApp = () => {
  //todos es el state

  const { todos, handleDeleteTodo, handleNewTodo, handleToggleTodo } =
    useTodo();

  const pendientes = todos.filter((todo) => todo.done === false);

  return (
    <>
      <h1>
        Todos: {todos.length} ||<small> Pendientes: {pendientes.length}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          {todos.length === 0 ? (
            <p className="text-light w-75 h4 py-2 flex mx-n2 text-center border border-danger rounded-5 bg-danger">
              No ToDos
            </p>
          ) : (
            <ToDoList
              todos={todos}
              onDeleteTodo={handleDeleteTodo}
              onToggleTodo={handleToggleTodo}
            />
          )}
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <ToDoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
