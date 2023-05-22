import { FC, memo, useCallback, useMemo } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '@memoization-explanation/store'
import { get } from 'lodash'
import Content from './Content'

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

  const onClick = useCallback(() => {
    console.log('Hi!', isPositive)
  }, [isPositive])

  return (
    <Card>
      <CardHeader title="Fixed Memo with hook" />
      <ContentMemo positiveMap={positiveMap} onClick={onClick} />
      <CardContent>
        <Typography>Count: {count}</Typography>
      </CardContent>
    </Card>
  )
}

export default MemoFixedHookCard
