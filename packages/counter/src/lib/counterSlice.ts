import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { unset } from 'lodash'

export interface CounterState {
  counters: Record<string, number>
}

const initialState: CounterState = {
  counters: {},
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      if (!state.counters[action.payload]) {
        state.counters[action.payload] = 1
      } else {
        state.counters[action.payload] += 1
      }
    },
    decrement: (state, action: PayloadAction<string>) => {
      if (!state.counters[action.payload]) {
        state.counters[action.payload] = -1
      } else {
        state.counters[action.payload] -= 1
      }
    },
    reset: (state, action: PayloadAction<string>) => {
      state.counters[action.payload] = 0
    },
    remove: (state, action: PayloadAction<string>) => {
      unset(state.counters, action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, reset, remove } = counterSlice.actions

export const reducer = counterSlice.reducer

export type RootState = { counter: CounterState }
