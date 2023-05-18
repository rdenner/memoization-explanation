import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { FC, useMemo } from 'react'
import { contactsSlice } from '@memoization-explanation/contacts'
import { find } from 'lodash'

interface Props {
  counterId: string
  contactId: string
}

// 1. Use argument in individual selectors
const select1 = createSelector(
  (state: RootState, counterId: string, _: string) =>
    state.counter.counters[counterId],
  (state: RootState, _: string, contactId: string) =>
    contactsSlice.selectors.selectById(state, contactId)?.name ?? '',
  (counter, contact) => {
    console.log('MultiArgs: Hello from selector 1!')
    return { counter, contact }
  }
)

// 2. Object parameter
const select2 = createSelector(
  (state: RootState, props: Props) => state.counter.counters[props.counterId],
  (state: RootState, props: Props) =>
    contactsSlice.selectors.selectById(state, props.contactId)?.name ?? '',
  (counter, contact) => {
    console.log('MultiArgs: Hello from selector 2!')
    return { counter, contact }
  }
)

// 3. Object props can be dangerous:
const select3 = createSelector(
  (state: RootState) => state.counter.counters,
  contactsSlice.selectors.selectAll,
  (_: RootState, props: Props) => props,
  (counters, contacts, props) => {
    console.log('MultiArgs: Hello from selector 3!')
    const counter = counters[props.counterId]
    const contact =
      find(contacts, ({ id }) => id === props.contactId)?.name ?? ''
    return { counter, contact }
  }
)

// Same as previous, but used safely
const select4 = createSelector(
  (state: RootState) => state.counter.counters,
  contactsSlice.selectors.selectAll,
  (_: RootState, props: Props) => props,
  (counters, contacts, props) => {
    console.log('MultiArgs: Hello from selector 4!')
    const counter = counters[props.counterId]
    const contact =
      find(contacts, ({ id }) => id === props.contactId)?.name ?? ''
    return { counter, contact }
  }
)

const MultiArgCard: FC<Props> = ({ counterId, contactId }) => {
  console.log('MultiArgs: I have rendered!')

  // Why does this not need a custom equality function?
  const data1 = useSelector((state: RootState) =>
    select1(state, counterId, contactId)
  )

  const data2 = useSelector((state: RootState) =>
    select2(state, { counterId, contactId })
  )

  // This one is bad because the props cause it to run even if unrelated state updates occur.
  // Can be helped with custom equality function, but would be better if we prevent
  // running it entirely.
  const data3 = useSelector((state: RootState) =>
    select3(state, { counterId, contactId })
  )

  // Memo parameters to solve issue:
  const params = useMemo(
    () => ({ counterId, contactId }),
    [counterId, contactId]
  )
  const data4 = useSelector((state: RootState) => select4(state, params))

  return (
    <Card>
      <CardHeader title="Args" />
      <CardContent>
        <Typography>Select 1: {JSON.stringify(data1)}</Typography>
        <Typography>Select 2: {JSON.stringify(data2)}</Typography>
        <Typography>Select 3: {JSON.stringify(data3)}</Typography>
        <Typography>Select 4: {JSON.stringify(data4)}</Typography>
      </CardContent>
    </Card>
  )
}

export default MultiArgCard
