import React, { FC } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { isEqual, map } from 'lodash'
import { RootState } from '../../store'
import { getPositiveMap } from './helpers'

const GoodCard: FC = () => {
  console.log('Good: I have rendered!')

  // Create a record of all counters with the values indicating if they are
  // positive or not.

  const positiveMap = useSelector((state: RootState) => {
    console.log('Good: Hello from selector!')

    // This still runs on every Redux state update to see if there is a change in the
    // result.
    return getPositiveMap(state.counter.counters)
  }, isEqual) // We need to use deep equality since the memory reference of the object is always new

  return (
    <Card>
      <CardHeader title="Good" />
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

export default GoodCard
