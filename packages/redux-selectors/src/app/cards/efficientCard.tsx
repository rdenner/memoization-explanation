import React, { FC } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { isEqual, map, reduce } from 'lodash'
import { RootState } from '../../store'

const EfficientCard: FC = () => {
  const counters: Record<string, boolean> = useSelector(
    (state: RootState) =>
      reduce(
        state.counter.counters,
        (prev, curr, key) => ({
          ...prev,
          [key]: curr > 0,
        }),
        {}
      ),
    isEqual
  )
  return (
    <Card>
      <CardHeader title="Efficient" />
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

export default EfficientCard
