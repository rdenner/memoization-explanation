import { reduce } from 'lodash'

export const getPositiveMap = (
  counters: Record<string, number>
): Record<string, boolean> =>
  reduce(
    counters,
    (prev, curr, key) => ({
      ...prev,
      [key]: curr > 0,
    }),
    {}
  )
