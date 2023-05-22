import { decrement, increment, remove, reset, RootState } from './counterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { FC } from 'react'
import { get } from 'lodash'
import Counter from './counter'

export interface Props {
  id: string
  className?: string
  startPaused?: boolean
}

export const ReduxCounter: FC<Props> = ({
  id,
  className,
  startPaused = false,
}) => {
  const count = useSelector((state: RootState) =>
    get(state.counter.counters, id, 0)
  )
  const dispatch = useDispatch()

  // No real point using callbacks here since count will trigger rerender.
  // Rather memo Redux Counter to prevent outside interference if it is rendering
  // too much.
  return (
    <Counter
      count={count}
      className={className}
      startPaused={startPaused}
      reset={() => dispatch(reset(id))}
      remove={() => dispatch(remove(id))}
      increment={() => dispatch(increment(id))}
      decrement={() => dispatch(decrement(id))}
    />
  )
}
