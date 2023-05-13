import React, { FC } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { map, reduce } from 'lodash'
import { RootState } from '../../store'

const InefficientCard: FC = () => {
  // Create a record of all counters with the values indicating if they are
  // positive or not.

  // Not scalable to have multiple selectors:
  // const isPositive1 = useSelector(
  //   (state: RootState) => get(state.counter.counters, 'counter-1', 0) > 0
  // )
  // const isPositive2 = useSelector(
  //   (state: RootState) => get(state.counter.counters, 'counter-2', 0) > 0
  // )

  // Can't conditionally use hooks:
  // const counters: Record<string, boolean> = {}
  // forEach(['counter-1', 'counter-2'], (key) => {
  //   // React Hook "useSelector" cannot be called inside a callback
  //   counters[key] = useSelector(
  //     (state: RootState) => get(state.counter.counters, key, 0) > 0
  //   )
  // })

  // Need to do processing inside selector.
  // Why is this also bad? See efficientCard.
  const counters: Record<string, boolean> = useSelector((state: RootState) =>
    reduce(
      state.counter.counters,
      (prev, curr, key) => ({
        ...prev,
        [key]: curr > 0,
      }),
      {}
    )
  )

  return (
    <Card>
      <CardHeader title="Inefficient" />
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

export default InefficientCard
