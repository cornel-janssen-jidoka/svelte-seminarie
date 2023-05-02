import React, { useState } from 'react';
import Layout from "./Layout";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const createTodo = () => {
    if (inputValue) {
      setTodos([
        ...todos,
        {
          id: todos.length,
          text: inputValue,
          checked: false,
        }
      ]);

      setInputValue('');
    }
  }

  const updateInputValue = (event: any) => {
    setInputValue(event.target.value);
  }

  const checkTodo = (event: any) => {
    setTodos(todos.map(todo => {
      if (todo.id === event.id) {
        return {
          ...todo,
          checked: event.value
        };
      }

      return todo;
    }));
  }

  return (
    <Layout>
      <div className="create-todo-container">
        <label htmlFor="todo-input">Todo: </label>
        <input type="text" id="todo-input" placeholder="New todo ..." onChange={updateInputValue} value={inputValue}/>
        <button onClick={createTodo}>Create</button>
      </div>

      <div className="todos-container">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onCheckboxChange={checkTodo}/>
        ))}
      </div>
    </Layout>
  );
}

export default App;
