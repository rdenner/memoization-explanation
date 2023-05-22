import { FC, useContext } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { map } from 'lodash'
import {
  counterContext,
  getPositiveMap,
} from '@memoization-explanation/counter'

const BadMapCard: FC = () => {
  // Cant really target a specific part of the context like you can in redux so this will
  // Always trigger rerender if any part in counters change
  const { counters } = useContext(counterContext.CounterContext)

  // Doesn't really matter if this is memoized or not
  const positiveMap = getPositiveMap(counters)

  return (
    <Card>
      <CardHeader title="Bad Map" />
      <CardContent>
        {map(positiveMap, (isPositive, key) => (
          <Typography key={key}>{`${key} => ${
            isPositive ? 'positive' : 'negative'
          }`}</Typography>
        ))}
      </CardContent>
    </Card>
  )
}

export default BadMapCard
