import { FC } from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { isEqual, map } from 'lodash';
import { RootState } from '@memoization-explanation/store';
import { getPositiveMap } from '@memoization-explanation/counter';
import { createSelector } from '@reduxjs/toolkit';

// Create selector does memoization on each selector provided by it.
// The benefit of this is that it is only affected by counters and not other things.
//
// Basically same as:
// const counters = useSelector((state) => state.counter.counters)
// const result = useMemo(() => reduce(
//     counters,
//     (prev, curr, key) => ({
//       ...prev,
//       [key]: curr > 0,
//     }),
//     {}
//   ),
//   [counters]
// )
//
// But cleaner.
export const positiveSelector = createSelector(
  (state: RootState) => {
    console.log('Better: Hello from selector inner!')
    return state.counter.counters
  },
  (counters) => {
    console.log('Better: Hello from selector outer!')
    return getPositiveMap(counters)
  }
)

const BetterCard: FC = () => {
  console.log('Better: I have rendered!')

  // Create a record of all counters with the values indicating if they are
  // positive or not.

  // This does solve the re-render issue, but we still have a redundant check
  const positiveMap = useSelector(positiveSelector, isEqual)

  return (
    <Card>
      <CardHeader title="Better" />
      <CardContent>
        {map(positiveMap, (isPositive, key) => (
          <Typography key={key}>{`${key} => ${
            isPositive ? 'positive' : 'negative'
          }`}</Typography>
        ))}
      </CardContent>
    </Card>
  )
}

export default BetterCard
