import { FC, memo } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '@memoization-explanation/store'
import { get } from 'lodash'
import ExpensiveMemo from '../ExpensiveMemo'

interface Props {
  countId: string
}

const Content = () => (
  <CardContent>
    {/* We already have a memo so this memo doesn't add value */}
    <ExpensiveMemo />
  </CardContent>
)

const ContentMemo = memo(Content)

const MemoRedundantCard: FC<Props> = ({ countId }) => {
  const count = useSelector((state: RootState) =>
    get(state.counter.counters, countId, 0)
  )

  return (
    <Card>
      <CardHeader title="Redundant Memo" />
      <ContentMemo />
      <CardContent>
        <Typography>Count: {count}</Typography>
      </CardContent>
    </Card>
  )
}

// This is pointless since the component constantly changes.
// Also, the component that renders this, never updates so also pointless.
export default memo(MemoRedundantCard)
