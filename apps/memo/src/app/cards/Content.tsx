import { FC } from 'react'
import { Button, CardContent, Typography } from '@mui/material'
import { some } from 'lodash'
import Expensive from '../Expensive'

interface Props {
  positiveMap?: Record<string, boolean>
  onClick?: () => void
}

const Content: FC<Props> = ({ positiveMap, onClick }) => (
  <CardContent>
    {onClick && <Button onClick={onClick}>Click</Button>}
    {positiveMap && (
      <Typography>
        Has positive: {some(positiveMap, (val) => val) ? 'Yes' : 'No'}
      </Typography>
    )}
    <Expensive />
  </CardContent>
)

export default Content
