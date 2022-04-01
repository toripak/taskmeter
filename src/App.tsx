import React, { useState } from 'react';
import './App.css';
import { Todo } from './TodoInterface';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';

//styles
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const App: React.FC = () => {
  const [todoTitle, setTodoTitle] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todoTitle) {
      setTodos([...todos, {
        id: Math.random(),
        todoTitle,
        isCompleted: false
      }
      ]);
      setTodoTitle('');
    }
  }

  console.log(todos);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <TodoForm
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        addTodo={addTodo}
        todos={todos}
      />
      <TodoList />
    </ThemeProvider>
  );
}

export default App;
