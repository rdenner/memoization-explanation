import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useState,
} from 'react'
import { CounterState } from './counterSlice'
import { omit } from 'lodash'

interface State extends CounterState {
  reset: (id: string) => void
  increment: (id: string) => void
  decrement: (id: string) => void
  remove: (id: string) => void
}

const defaultFunc = () => {
  // Empty
}

export const CounterContext = createContext<State>({
  counters: {},
  increment: defaultFunc,
  decrement: defaultFunc,
  remove: defaultFunc,
  reset: defaultFunc,
})

// No point having this in a memo, because it takes children
export const CounterContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [counters, setCounters] = useState<State['counters']>({})

  // Just using use callback here in case any of these are passed to some memoized component's props
  const increment = useCallback(
    (id: string) => setCounters((prev) => ({ ...prev, [id]: prev[id] + 1 })),
    []
  )

  const decrement = useCallback(
    (id: string) => setCounters((prev) => ({ ...prev, [id]: prev[id] - 1 })),
    []
  )

  const remove = useCallback(
    (id: string) => setCounters((prev) => omit(prev, id)),
    []
  )

  const reset = useCallback(
    (id: string) => setCounters((prev) => ({ ...prev, [id]: 0 })),
    []
  )

  return (
    <CounterContext.Provider
      value={{ counters, increment, decrement, remove, reset }}
    >
      {children}
    </CounterContext.Provider>
  )
}
