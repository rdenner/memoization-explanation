import { FC, memo } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '@memoization-explanation/store'
import { get } from 'lodash'
import Expensive from '../Expensive'

const Content: FC<{ counterObject: object }> = () => (
  <CardContent>
    <Expensive />
  </CardContent>
)

const ContentMemo = memo(Content)

interface Props {
  countId: string
}

const MemoBrokenCard: FC<Props> = ({ countId }) => {
  const count = useSelector((state: RootState) =>
    get(state.counter.counters, countId, 0)
  )

  // Object recreated on each render
  const counterObject = { [countId]: count }

  return (
    <Card>
      <CardHeader title="Broken Memo" />
      {/* This prop breaks memo */}
      <ContentMemo counterObject={counterObject} />
      <CardContent>
        <Typography>Count: {count}</Typography>
      </CardContent>
    </Card>
  )
}

export default MemoBrokenCard
