import "./styles.css";

export default function Card({ todo, completeTodo, deleteTodo }) {
  function handleCompleteTodo() {
    completeTodo(todo.id);
  }

  function handleDeleteTodo() {
    deleteTodo(todo.id);
  }

  return (
    <div className={`card ${todo.completed ? "done" : ""}`}>
      <h2>{todo.title}</h2>

      <div className="card-buttons">
        <button onClick={handleCompleteTodo}>
          {todo.completed ? "Retomar" : "Completar"}
        </button>
        <button onClick={handleDeleteTodo}>Deletar</button>
      </div>
    </div>
  );
}
