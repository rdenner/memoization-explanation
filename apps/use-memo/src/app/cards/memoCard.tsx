import { FC } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '@memoization-explanation/store'
import { get } from 'lodash'
import ExpensiveMemo from '../ExpensiveMemo'

interface Props {
  countId: string
}

const MemoCard: FC<Props> = ({ countId }) => {
  const count = useSelector((state: RootState) =>
    get(state.counter.counters, countId, 0)
  )

  return (
    <Card>
      <CardHeader title="Memo" />
      <CardContent>
        <ExpensiveMemo />
      </CardContent>
      <CardContent>
        <Typography>Count: {count}</Typography>
      </CardContent>
    </Card>
  )
}

export default MemoCard
