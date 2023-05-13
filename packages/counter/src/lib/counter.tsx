import { decrement, increment, remove, reset } from './counterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './types'
import { FC, useEffect, useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material'
import { get } from 'lodash'

import { Add, Pause, PlayArrow, Remove } from '@mui/icons-material'

export interface Props {
  id: string
  className?: string
  startPaused?: boolean
}

export const Counter: FC<Props> = ({ id, className, startPaused = false }) => {
  const count = useSelector((state: RootState) =>
    get(state.counter.counters, `${id}`, 0)
  )
  const dispatch = useDispatch()

  const [paused, setPaused] = useState(startPaused)

  useEffect(() => {
    dispatch(reset(id))
    return () => {
      dispatch(remove(id))
    }
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timer
    if (!paused) {
      interval = setInterval(() => dispatch(increment(id)), 1000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [paused])

  return (
    <Card className={className}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }}>{count}</Typography>
      </CardContent>

      <CardActions>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton
            aria-label="previous"
            onClick={() => dispatch(decrement(id))}
          >
            <Remove />
          </IconButton>
          <IconButton
            aria-label="play/pause"
            onClick={() => setPaused((prev) => !prev)}
          >
            {paused ? (
              <PlayArrow sx={{ height: 38, width: 38 }} />
            ) : (
              <Pause sx={{ height: 38, width: 38 }} />
            )}
          </IconButton>
          <IconButton aria-label="next" onClick={() => dispatch(increment(id))}>
            <Add />
          </IconButton>
        </Box>
        <Button
          type="button"
          aria-label="Reset value"
          onClick={() => dispatch(reset(id))}
          color="secondary"
        >
          reset
        </Button>
      </CardActions>
    </Card>
  )
}

export default Counter
