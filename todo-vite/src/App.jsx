import { useEffect, useState } from "react";

import Card from "./components/Card";

import "./App.css";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("@todoList:todos");

    if (storedTodos) {
      return JSON.parse(storedTodos);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("@todoList:todos", JSON.stringify(todos));
  }, [todos]);

  function handleInputChange(e) {
    setTodoInput(e.target.value);
  }

  function addTodo() {
    setTodos((previousTodo) => [
      ...previousTodo,
      { id: Math.random(), title: todoInput, completed: false },
    ]);

    setTodoInput("");
  }

  function completeTodo(id) {
    setTodos((previousTodo) =>
      previousTodo.map((todo) =>
        todo.id !== id ? todo : { ...todo, completed: !todo.completed }
      )
    );
  }

  function deleteTodo(id) {
    setTodos((previousTodos) => previousTodos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <div className="add-todo">
        <input
          placeholder="Fazer café"
          value={todoInput}
          onChange={handleInputChange}
        />
        <button onClick={addTodo}>Adicionar</button>
      </div>

      {todos.map((todo) => (
        <Card
          key={todo.id}
          todo={todo}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default App;
