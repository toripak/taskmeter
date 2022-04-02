import React, { useState } from 'react';
import { Todo } from '../../utils/TodoInterface';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


interface Props {
  todoItem: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
}

export const TodoItem = ({ todoItem, setTodos, todos }: Props) => {

  const { id, todoTitle } = todoItem;

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const completeTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
  };

  return (
    <React.Fragment>
      <Container sx={{ py: .5 }} maxWidth="md">
        <Stack justifyContent='center' alignItems='center' spacing={1} >

          <Card
            variant='outlined'
            sx={{
              mx: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: "100%", color: '#444'
            }} >

            {todoItem?.isCompleted ? (
              <Typography padding={1} sx={{ overflow: 'auto', textOverflow: 'ellipsis', textDecoration: 'line-through', fontSize: 14 }}>
                {todoTitle}
              </Typography>
            ) : (
              <Typography padding={1} sx={{ overflow: 'auto', textOverflow: 'ellipsis', fontSize: 14 }}>
                {todoTitle}
              </Typography>
            )}

            <CardActions sx={{ overflow: 'visible' }}>
              {todoItem.isCompleted ? (
                <IconButton
                  disabled
                  size="small"
                  color='secondary'
                >
                  <DoneIcon
                  />
                </IconButton>
              ) : (
                <IconButton
                  size="small"
                  color='success'
                  onClick={(e) => completeTodo(id)}
                >
                  <DoneIcon
                  />
                </IconButton>
              )}

              <IconButton
                size="small"
                color='error'
                onClick={(e) => deleteTodo(id)}
              >
                <ClearIcon

                />
              </IconButton>
            </CardActions>
          </Card>
        </Stack>
      </Container>
    </React.Fragment >
  )
}
