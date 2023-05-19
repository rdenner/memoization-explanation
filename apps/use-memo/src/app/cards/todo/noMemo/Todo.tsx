import { FC } from 'react'
import { map } from 'lodash'
import { Box, Button, ButtonGroup } from '@mui/material'

interface Props {
  todos: string[]
  addTodo: () => void
}

const Todo: FC<Props> = ({ todos, addTodo }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <ButtonGroup>
      <Button onClick={addTodo}>Add</Button>
    </ButtonGroup>
    <ul>
      {map(todos, (todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  </Box>
)

export default Todo
