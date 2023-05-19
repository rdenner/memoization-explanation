import { FC, useCallback, useState } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '@memoization-explanation/store'
import { get } from 'lodash'
import Todo from './Todo'

interface Props {
  countId: string
}

const TodoCard: FC<Props> = ({ countId }) => {
  const [todos, setTodos] = useState<string[]>([])

  const count = useSelector((state: RootState) =>
    get(state.counter.counters, countId, 0)
  )

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, 'New Todo'])
  }, [])

  return (
    <Card>
      <CardHeader title="No Memo" />
      <CardContent>
        <Todo todos={todos} addTodo={addTodo} />
      </CardContent>
      <CardContent>
        <Typography>Count: {count}</Typography>
      </CardContent>
    </Card>
  )
}

export default TodoCard
