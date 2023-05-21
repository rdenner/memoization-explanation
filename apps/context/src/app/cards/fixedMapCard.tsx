import { FC, memo, useContext } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { isEqual, map } from 'lodash'
import {
  counterContext,
  getPositiveMap,
} from '@memoization-explanation/counter'

const Content: FC<{ positiveMap: Record<string, boolean> }> = ({
  positiveMap,
}) => (
  <Card>
    <CardHeader title="Fixed Map" />
    <CardContent>
      {map(positiveMap, (isPositive, key) => (
        <Typography key={key}>{`${key} => ${
          isPositive ? 'positive' : 'negative'
        }`}</Typography>
      ))}
    </CardContent>
  </Card>
)

const ContentMemo = memo(Content, isEqual)

const FixedMapCard: FC = () => {
  const { counters } = useContext(counterContext.CounterContext)

  const positiveMap = getPositiveMap(counters)

  return <ContentMemo positiveMap={positiveMap} />
}

export default FixedMapCard
