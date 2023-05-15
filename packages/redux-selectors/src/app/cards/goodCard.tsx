import React, { FC } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { isEqual, map, reduce } from 'lodash'
import { RootState } from '../../store'

const GoodCard: FC = () => {
  console.log('Good: I have rendered!')

  // Create a record of all counters with the values indicating if they are
  // positive or not.

  const counters: Record<string, boolean> = useSelector((state: RootState) => {
    console.log('Good: Hello from selector!')

    // This still runs on every Redux state update to see if there is a change in the
    // result.
    return reduce(
      state.counter.counters,
      (prev, curr, key) => ({
        ...prev,
        [key]: curr > 0,
      }),
      {}
    )
  }, isEqual) // We need to use deep equality since the memory reference of the object is always new

  // Problems with this approach?
  // - Deep equality can be expensive
  // - We still do calculations on every state update
  // - Is this the correct place for this?
  //   - Calculating on read vs write

  // Positives?
  // - Simple

  return (
    <Card>
      <CardHeader title="Good" />
      <CardContent>
        {map(counters, (isPositive, key) => (
          <Typography key={key}>{`${key} => ${
            isPositive ? 'positive' : 'negative'
          }`}</Typography>
        ))}
      </CardContent>
    </Card>
  )
}

export default GoodCard