import { FC, useContext, useMemo } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { counterContext } from '@memoization-explanation/counter'

interface Props {
  id: string
}

const GoodBasicCard: FC<Props> = ({ id }) => {
  const { counters } = useContext(counterContext.CounterContext)

  const isPositive = counters[id] > 0

  // Or use React.memo
  return useMemo(
    () => (
      <Card>
        <CardHeader title="Good Basic" />
        <CardContent>
          <Typography>{isPositive ? 'True' : 'False'}</Typography>
        </CardContent>
      </Card>
    ),
    [isPositive]
  )
}

export default GoodBasicCard
