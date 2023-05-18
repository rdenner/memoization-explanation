import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { FC } from 'react';
import { contactsSlice } from '@memoization-explanation/contacts';

// We have three options to define arguments for our selectors:

// 1. Use argument in individual selectors
const selectCounter1 = createSelector(
  (state: RootState, id: string) => state.counter.counters[id],
  (counter) => {
    console.log('Args: Hello from selector 1!')
    return counter
  }
)

// 2. Treat argument as selector (would result in memoize that above doesn't have)
const selectCounter2 = createSelector(
  (state: RootState) => state.counter.counters,
  (_: RootState, id: string) => id,
  (counters, id) => {
    console.log('Args: Hello from selector 2!')
    return counters[id]
  }
)

// 3. Wrap selector in function.
// Question: Does this preserve memoization through renders?
const getCounterSelector3 = (id: string) =>
  createSelector(
    (state: RootState) => state.counter.counters,
    (counters) => {
      console.log('Args: Hello from selector 3!')
      return counters[id]
    }
  )

interface Props {
  counterId: string
  contactId: string
}

const ArgCard: FC<Props> = ({ counterId, contactId }) => {
  console.log('Args: I have rendered!')

  const counter1 = useSelector((state: RootState) =>
    selectCounter1(state, counterId)
  )
  const counter2 = useSelector((state: RootState) =>
    selectCounter2(state, counterId)
  )
  const counter3 = useSelector(getCounterSelector3(counterId))

  const contact = useSelector((state: RootState) =>
    contactsSlice.selectors.selectById(state, contactId)
  )

  return (
    <Card>
      <CardHeader title="Args" />
      <CardContent>
        <Typography>Counter 1: {counter1}</Typography>
        <Typography>Counter 2: {counter2}</Typography>
        <Typography>Counter 3: {counter3}</Typography>
        <Typography>Contact: {contact?.name ?? ''}</Typography>
      </CardContent>
    </Card>
  )
}

export default ArgCard
