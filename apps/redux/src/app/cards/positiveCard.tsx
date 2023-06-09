import { FC } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { get } from 'lodash'
import { RootState } from '@memoization-explanation/store'

interface Props {
  counterId: string
}

const PositiveCard: FC<Props> = ({ counterId }) => {
  const isPositive = useSelector(
    (state: RootState) => get(state.counter.counters, counterId, 0) > 0
  )
  return (
    <Card>
      <CardHeader title="Safe" />
      <CardContent>
        <Typography>{isPositive ? 'True' : 'False'}</Typography>
      </CardContent>
    </Card>
  )
}

export default PositiveCard
