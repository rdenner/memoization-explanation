import React, { FC } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { get } from 'lodash'
import { RootState } from '../../store'

interface Props {
  counterId: string
}

const PositiveCard: FC<Props> = ({ counterId }) => {
  const isPositive = useSelector(
    (state: RootState) => get(state.counter.counters, counterId, 0) > 0
  )
  return (
    <Card>
      <CardHeader title="Is Positive" />
      <CardContent>
        <Typography>{isPositive ? 'True' : 'False'}</Typography>
      </CardContent>
    </Card>
  )
}

export default PositiveCard
