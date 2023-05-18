import { FC } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { map } from 'lodash'
import { RootState } from '../../store'
import { getPositiveMap } from './helpers'

const BadCard: FC = () => {
  console.log('Bad: I have rendered!')

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
  const positiveMap = useSelector((state: RootState) => {
    console.log('Bad: Hello from selector!')
    return getPositiveMap(state.counter.counters)
  })

  return (
    <Card>
      <CardHeader title="Bad" />
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

export default BadCard
