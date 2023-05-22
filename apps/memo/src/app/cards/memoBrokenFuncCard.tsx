import { FC, memo } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '@memoization-explanation/store'
import { get } from 'lodash'
import Expensive from '../Expensive'

const Content: FC<{ onClick: () => void }> = ({ onClick }) => (
  <CardContent>
    <Button onClick={onClick}>Click</Button>
    <Expensive />
  </CardContent>
)

const ContentMemo = memo(Content)

interface Props {
  countId: string
}

const MemoBrokenFuncCard: FC<Props> = ({ countId }) => {
  const count = useSelector((state: RootState) =>
    get(state.counter.counters, countId, 0)
  )

  return (
    <Card>
      <CardHeader title="Broken Memo Func" />
      {/* This prop breaks memo */}
      <ContentMemo onClick={() => console.log('Hi!')} />
      <CardContent>
        <Typography>Count: {count}</Typography>
      </CardContent>
    </Card>
  )
}

export default MemoBrokenFuncCard
