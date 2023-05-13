import React, { FC } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { map, reduce } from 'lodash'
import { RootState } from '../../store'

const InefficientCard: FC = () => {
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
