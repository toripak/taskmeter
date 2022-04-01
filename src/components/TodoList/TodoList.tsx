import React from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { Todo } from '../../TodoInterface';

import Stack from '@mui/material/Stack';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <React.Fragment>
      <Stack justifyContent='center' alignItems='center' spacing={1}>
        {todos.map(todo => (
          <TodoItem
            todoItem={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </Stack>
    </React.Fragment>
  )
}
