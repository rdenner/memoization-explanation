import { FC, useContext } from 'react'
import Counter from './counter'
import { CounterContext } from './counterContext'

export interface Props {
  id: string
  className?: string
  startPaused?: boolean
}

export const ContextCounter: FC<Props> = ({
  id,
  className,
  startPaused = false,
}) => {
  const { counters, reset, remove, increment, decrement } =
    useContext(CounterContext)
  const count = counters[id] ?? 0

  // No real point using callbacks here since counters will trigger rerender.
  // Rather memo Counter to prevent outside interference if it is rendering
  // too much.
  return (
    <Counter
      count={count}
      className={className}
      startPaused={startPaused}
      reset={() => reset(id)}
      remove={() => remove(id)}
      increment={() => increment(id)}
      decrement={() => decrement(id)}
    />
  )
}
