import { FC, memo } from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@memoization-explanation/store';
import { get, isEqual } from 'lodash';
import Content from './Content';

// Use deep equality to check for changes:
const ContentMemo = memo(Content, (first, second) =>
  isEqual(first.positiveMap, second.positiveMap)
)

interface Props {
  countId: string
}

const MemoFixedCard: FC<Props> = ({ countId }) => {
  const count = useSelector((state: RootState) =>
    get(state.counter.counters, countId, 0)
  )

  // Object recreated on each render
  const positiveMap = { [countId]: count > 0 }

  return (
    <Card>
      <CardHeader title="Fixed Memo deep equality" />
      <ContentMemo
        positiveMap={positiveMap}
        onClick={() => {
          console.log('Hi!')
        }}
      />
      <CardContent>
        <Typography>Count: {count}</Typography>
      </CardContent>
    </Card>
  )
}

export default MemoFixedCard
