import { FC, memo } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '@memoization-explanation/store'
import { get } from 'lodash'
import Content from './Content'

interface Props {
  countId: string
}

// We can reuse the memo in multiple instances, and it will memo each separately
const MemoContent = memo(Content)

const onClick2 = () => null
const onClick3 = () => null

const MultiMemoCard: FC<Props> = ({ countId }) => {
  const count = useSelector((state: RootState) =>
    get(state.counter.counters, countId, 0)
  )

  const onClick1 = () => null

  return (
    <Card>
      <CardHeader title="Multi Memo" />
      <MemoContent onClick={onClick1} />
      <MemoContent onClick={onClick2} />
      <MemoContent onClick={onClick3} />
      <CardContent>
        <Typography>Count: {count}</Typography>
      </CardContent>
    </Card>
  )
}

export default MultiMemoCard
