import { useState } from "react";

import "./App.css"
import TodosList from "./TodoList";


function App() {
  const [isVisible, setIsVisible] = useState(true);

  const handleUnmount = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <button onClick={handleUnmount}>
        Remove Todos
      </button>

      {isVisible ? <TodoContainer /> : null}
    </div>
  );
}

export default App;
