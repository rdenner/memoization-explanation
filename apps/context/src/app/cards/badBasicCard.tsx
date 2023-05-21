import { FC, useContext } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { counterContext } from '@memoization-explanation/counter'

interface Props {
  id: string
}

const BadBasicCard: FC<Props> = ({ id }) => {
  // Cant really target a specific part of the context like you can in redux so this will
  // Always trigger rerender if any part in counters change
  const { counters } = useContext(counterContext.CounterContext)

  const isPositive = counters[id] > 0

  return (
    <Card>
      <CardHeader title="Bad Basic" />
      <CardContent>
        <Typography>{isPositive ? 'True' : 'False'}</Typography>
      </CardContent>
    </Card>
  )
}

export default BadBasicCard
