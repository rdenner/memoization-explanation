import { FC } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '@memoization-explanation/store'
import { get } from 'lodash'
import Expensive from '../Expensive'

interface Props {
  countId: string
}

const NoMemoCard: FC<Props> = ({ countId }) => {
  // This constantly changes
  const count = useSelector((state: RootState) =>
    get(state.counter.counters, countId, 0)
  )

  return (
    <Card>
      <CardHeader title="No Memo" />
      <CardContent>
        {/* This has nothing to do with count, but constantly rerenders when */}
        {/* count changes. */}
        <Expensive />
      </CardContent>
      <CardContent>
        <Typography>Count: {count}</Typography>
      </CardContent>
    </Card>
  )
}

export default NoMemoCard
