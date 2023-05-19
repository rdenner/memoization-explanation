import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { FC, useMemo } from 'react'
import { RootState } from '@memoization-explanation/store'
import { useSelector } from 'react-redux'
import { getPositiveMap } from '@memoization-explanation/counter'

const BadMemoCard: FC = () => {
  const counters = useSelector((state: RootState) => state.counter.counters)

  // A memo is only as good as what it is given.
  // This will constantly rerender even if we memo.
  const positiveMap = useMemo(() => getPositiveMap(counters), [counters])

  // Entire chain is broken if one link is broken
  // const someCalc = useMemo(() => {...}, [positiveMap])
  // const someCalc2 = useMemo(() => {...}, [someCalc])

  // Would be much better if above is defined using create selector
  // Would also clean up this component
  // Would also mean memoization is shared across users of selector.

  // TODO: mutate counters into something that won't change
  // then pass them to the children to show they rerender
  // Then memo them to show children don't rerender

  // TODO: mention that create selector would be cleaner since it is defined outside the component
  // And the memoization in create selector can be shared with other components
  return (
    <Card>
      <CardHeader title="Bad Memo"></CardHeader>
      <CardContent>
        <Typography>{JSON.stringify(positiveMap)}</Typography>
      </CardContent>
    </Card>
  )
}

export default BadMemoCard
