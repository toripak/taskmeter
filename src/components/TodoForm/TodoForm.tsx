import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import AddIcon from '@mui/icons-material/Add'; import { Todo } from '../../TodoInterface';


interface Props {
  todoTitle: string;
  todos: Todo[];
  setTodoTitle: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (e: React.FormEvent) => void;
}

export const TodoForm: React.FC<Props> = ({ todoTitle, setTodoTitle, addTodo, todos }) => {

  return (
    <React.Fragment>
      {todos?.length > 0 && <h3>Completed: </h3>}
      <Container>
        <Box
          component='form'
          onSubmit={(e: React.FormEvent) => addTodo(e)}
          sx={{ margin: 1, minWidth: 200 }}>
          <TextField
            fullWidth
            required
            margin='normal'
            label='todo'
            variant='outlined'
            placeholder='Add new item'
            autoFocus
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            InputProps={{
              endAdornment:
                <IconButton type='submit'>
                  <AddIcon />
                </IconButton>
            }}
          >

          </TextField>
        </Box>
      </Container>
    </React.Fragment >
  )
}
