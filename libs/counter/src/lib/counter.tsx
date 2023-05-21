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

import { Add, Pause, PlayArrow, Remove } from '@mui/icons-material'

export interface Props {
  count: number
  className?: string
  startPaused?: boolean
  reset: () => void
  remove: () => void
  increment: () => void
  decrement: () => void
}

export const Counter: FC<Props> = ({
  count,
  reset,
  remove,
  increment,
  decrement,
  className,
  startPaused = false,
}) => {
  const [paused, setPaused] = useState(startPaused)

  useEffect(() => {
    reset()
    return () => {
      remove()
    }
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timer
    if (!paused) {
      interval = setInterval(increment, 1000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [paused, increment])

  return (
    <Card className={className}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }}>{count}</Typography>
      </CardContent>

      <CardActions>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous" onClick={decrement}>
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
          <IconButton aria-label="next" onClick={increment}>
            <Add />
          </IconButton>
        </Box>
        <Button
          type="button"
          aria-label="Reset value"
          onClick={reset}
          color="secondary"
        >
          reset
        </Button>
      </CardActions>
    </Card>
  )
}

export default Counter
