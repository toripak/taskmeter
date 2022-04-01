import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Todo } from '../TodoInterface';


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
      <Stack justifyContent='center' direction='row' spacing={2}>

        <Box component='form' onSubmit={(e: React.FormEvent) => addTodo(e)} sx={{ margin: 1 }}>
          <TextField
            required
            margin='normal'
            label='todo'
            variant='outlined'
            placeholder='Add new item'
            autoFocus
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          >

          </TextField>
          <Button
            type='submit'
            variant='contained'
          >
            +
          </Button>
        </Box>
      </Stack>
    </React.Fragment>
  )
}
