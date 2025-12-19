import { useEffect, useState } from "react";
import TodoItem from "./TodoCard";

function TodosList() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    console.log("Loading todo data...");

    const getTodos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const result = await response.json();
      setTodoItems(result.slice(0, 15));
    };

    getTodos();

    // cleanup on unmount
    return () => {
      alert("cleanup worked");
    };
  }, []);

  return (
    <div>
      <h2>Todos</h2>

      {todoItems.map(item => (
        <TodoItem
          key={item.id}
          userId={item.userId}
          title={item.title}
          completed={item.completed}
        />
      ))}
    </div>
  );
}

export default TodosList;
