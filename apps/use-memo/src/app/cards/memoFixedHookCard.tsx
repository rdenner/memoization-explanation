import { FC, memo, useMemo } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '@memoization-explanation/store'
import { get, some } from 'lodash'
import Expensive from '../Expensive'

const Content: FC<{ positiveMap: object }> = ({ positiveMap }) => (
  <CardContent>
    Has positive: {some(positiveMap, (val) => val > 0) ? 'Yes' : 'No'}
    <Expensive />
  </CardContent>
)

const ContentMemo = memo(Content)

interface Props {
  countId: string
}

const MemoFixedHookCard: FC<Props> = ({ countId }) => {
  const count = useSelector((state: RootState) =>
    get(state.counter.counters, countId, 0)
  )

  const isPositive = count > 0

  // Use memo hook to remember value and set dependencies to recalculate
  const positiveMap = useMemo(
    () => ({ [countId]: isPositive }),
    [countId, isPositive]
  )

  return (
    <Card>
      <CardHeader title="Fixed Memo with hook" />
      <ContentMemo positiveMap={positiveMap} />
      <CardContent>
        <Typography>Count: {count}</Typography>
      </CardContent>
    </Card>
  )
}

export default MemoFixedHookCard
