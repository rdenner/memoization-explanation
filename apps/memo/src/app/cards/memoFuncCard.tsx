import { FC } from 'react';
import { Button, Card, CardContent, CardHeader } from '@mui/material';
import { memoize } from 'lodash';

// If you want to memoize a function outside a react component:
const memoFunc = memoize((num: number) => {
  console.log('I have been called', num)
  return num
})

const onClick = () => {
  const foo = memoFunc(3)
  console.log('After memo', foo)
}

const MemoFuncCard: FC = () => (
  <Card>
    <CardHeader title="Memo Func" />
    <CardContent>
      <Button onClick={onClick}>Click Me!</Button>
    </CardContent>
  </Card>
)

export default MemoFuncCard
