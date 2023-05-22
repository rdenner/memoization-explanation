import { FC, useContext, useMemo } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { map } from 'lodash'
import {
  counterContext,
  getPositiveMap,
} from '@memoization-explanation/counter'

const BrokenMapCard: FC = () => {
  const { counters } = useContext(counterContext.CounterContext)

  // Not it matters if this is memoized
  const positiveMap = useMemo(() => getPositiveMap(counters), [counters])

  return useMemo(
    () => (
      <Card>
        <CardHeader title="Broken Map" />
        <CardContent>
          {map(positiveMap, (isPositive, key) => (
            <Typography key={key}>{`${key} => ${
              isPositive ? 'positive' : 'negative'
            }`}</Typography>
          ))}
        </CardContent>
      </Card>
    ),
    [positiveMap]
  )
}

export default BrokenMapCard
