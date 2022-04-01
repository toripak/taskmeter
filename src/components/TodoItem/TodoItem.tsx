import React from 'react';
import { Todo } from '../../TodoInterface';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { CardActions, Icon } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

interface Props {
  todoItem: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
}

export const TodoItem = ({ todoItem, setTodos, todos }: Props) => {
  const { id, todoTitle, isCompleted } = todoItem;

  return (
    <React.Fragment>
      <Stack justifyContent='center' alignItems='center' spacing={1} sx={{ minWidth: '90%', mx: 1 }}>
        <Card
          variant='outlined'
          sx={{ display: 'flex', justifyContent: 'space-between', flex: 1, minWidth: '100%', alignItems: 'center' }}
        >
          {todoTitle}
          <CardActions>
            <IconButton size="small" color='success'><DoneIcon /> </IconButton>
            <IconButton size="small" color='error'><ClearIcon /> </IconButton>
          </CardActions>
        </Card>
      </Stack>
    </React.Fragment >
  )
}
