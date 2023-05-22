import React, { FC, memo, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@memoization-explanation/store'
import { get } from 'lodash'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import Expensive from '../Expensive'

const MyComponent: FC<{ children: ReactNode }> = ({ children }) => (
  <CardContent>
    {children}
    <Expensive />
  </CardContent>
)

const MemoMyComponent = memo(MyComponent)

interface Props {
  countId: string
}

const MemoChildren: FC<Props> = ({ countId }) => {
  const count = useSelector((state: RootState) =>
    get(state.counter.counters, countId, 0)
  )

  return (
    <Card>
      <CardHeader title="Memo Children" />
      <MemoMyComponent>
        <Typography>Hi there!</Typography>
      </MemoMyComponent>
      <CardContent>
        <Typography>Count: {count}</Typography>
      </CardContent>
    </Card>
  )
}

export default MemoChildren
