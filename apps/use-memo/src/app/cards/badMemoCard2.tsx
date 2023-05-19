import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { FC, memo } from 'react'
import { RootState } from '@memoization-explanation/store'
import { useSelector } from 'react-redux'

const Content: FC<{ counters: Record<string, number> }> = ({ counters }) => (
  <CardContent>
    <Typography>{JSON.stringify(counters)}</Typography>
  </CardContent>
)

// This memo is pointless.
const ContentMemoized = memo(Content)

const BadMemoCard2: FC = () => {
  const counters = useSelector((state: RootState) => state.counter.counters)

  return (
    <Card>
      <CardHeader title="Bad Memo 2"></CardHeader>
      <ContentMemoized counters={counters} />
    </Card>
  )
}

export default BadMemoCard2
