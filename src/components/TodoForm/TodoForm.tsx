import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { Todo } from '../../utils/TodoInterface';

interface Props {
  todoTitle: string;
  todos: Todo[];
  setTodoTitle: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (e: React.FormEvent) => void;
}

export const TodoForm: React.FC<Props> = ({ todoTitle, setTodoTitle, addTodo, todos }) => {

  return (
    <React.Fragment>
      <Container sx={{ pt: 4 }} maxWidth="md">
        <Box
          component='form'
          sx={{ display: 'flex' }}
          onSubmit={(e: React.FormEvent) => addTodo(e)}
        >
          <TextField
            sx={{ bgcolor: 'background.paper', flex: '1', justifyContent: 'center', display: 'flex', mb: 2 }}
            fullWidth
            required
            label='todo'
            variant='outlined'
            placeholder='Add new todo'
            autoFocus
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            InputProps={{
              endAdornment:
                <IconButton type='submit'>
                  <AddCircleOutlineIcon color='primary' />
                </IconButton>
            }}
          >

          </TextField>
        </Box>

      </Container>

    </React.Fragment >
  )
}
