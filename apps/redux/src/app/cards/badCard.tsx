import { FC } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { map } from 'lodash'
import { RootState } from '@memoization-explanation/store'
import { getPositiveMap } from '@memoization-explanation/counter'

const BadCard: FC = () => {
  console.log('Bad: I have rendered!')

  // Create a record of all counters with the values indicating if they are
  // positive or not.

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
