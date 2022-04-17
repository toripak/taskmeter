import React, { useState, useEffect } from 'react';
import './App.css';
import { Todo } from './utils/TodoInterface';
import { Header } from './components/Header/Header';
import { TodoList } from './components/TodoList/TodoList';
import { TodoForm } from './components/TodoForm/TodoForm';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

//styles
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';

const theme = createTheme();

const LinearProgressWithLabel = (props: LinearProgressProps & { value: number }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 30 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const App: React.FC = () => {
  const [todoTitle, setTodoTitle] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem('todos') || '[]')
  );
  const [completedTodos, setCompletedTodos] = useState<number>(0);

  useEffect(() => {
    setCompletedTodos(todos.filter(todo => todo.isCompleted).length);
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todoTitle) {
      setTodos([...todos, {
        id: new Date().getTime(),
        todoTitle,
        isCompleted: false
      }
      ]);
      setTodoTitle('');
    }
  }

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

      <Stack sx={{ py: 1 }}
        direction="row"
        justifyContent="center"
      >
        {completedTodos > 0 && (
          <Box sx={{ minWidth: '50%' }}>
            <Card sx={{ boxshadow: '1', p: 1, my: 1, fontSize: '14px' }}>
              <p>Your progress:</p>
              <LinearProgressWithLabel value={completedTodos / todos?.length * 100} />
            </Card>
          </Box>
        )}
      </Stack>

      <TodoList
        todos={todos}
        setTodos={setTodos}
      />
      <Stack sx={{ pt: 1 }}
        direction="row"
        spacing={2}
        justifyContent="center"
      >
        {todos?.length > 0 &&
          <Button
            sx={{ mb: 2, mt: 1 }}
            variant='outlined'
            startIcon={<DeleteOutlineIcon />}
            onClick={() => setTodos([])}
          >
            Reset List
          </Button>}
      </Stack>

    </ThemeProvider >
  );
}

export default App;
