export const ToDoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  const deleteHandler = (id) => {
    onDeleteTodo(id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button onClick={() => deleteHandler(todo.id)} className="btn btn-danger">
        Borrar
      </button>
    </li>
  );
};
