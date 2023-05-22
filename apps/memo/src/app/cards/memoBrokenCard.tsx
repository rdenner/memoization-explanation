import { FC, memo } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '@memoization-explanation/store'
import { get } from 'lodash'
import Content from './Content'

const ContentMemo = memo(Content)

interface Props {
  countId: string
}

const MemoBrokenCard: FC<Props> = ({ countId }) => {
  const count = useSelector((state: RootState) =>
    get(state.counter.counters, countId, 0)
  )

  // Object recreated on each render
  const positiveMap = { [countId]: count }

  return (
    <Card>
      <CardHeader title="Broken Memo" />
      {/* This prop breaks memo */}
      <ContentMemo positiveMap={positiveMap} />
      <CardContent>
        <Typography>Count: {count}</Typography>
      </CardContent>
    </Card>
  )
}

export default MemoBrokenCard
