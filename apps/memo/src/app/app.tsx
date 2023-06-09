import { AppBar, Container, Grid, Toolbar, Typography } from '@mui/material'
import { ReduxCounter } from '@memoization-explanation/counter'
import MemoCard from './cards/memoCard'
import NoMemoCard from './cards/noMemoCard'
import MemoBrokenCard from './cards/memoBrokenCard'
import MemoBrokenFuncCard from './cards/memoBrokenFuncCard'
import MemoFixedCard from './cards/memoFixedCard'
import MemoFixedHookCard from './cards/memoFixedHookCard'
import MemoRedundantCard from './cards/memoRedundantCard'
import MemoChildren from './cards/memoChildren'
import MemoFuncCard from './cards/memoFuncCard'
import MultiMemoCard from './cards/multiMemoCard'

const COUNTER_NAME = 'my-counter'

export const App = () => (
  <Container>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Memo</Typography>
      </Toolbar>
    </AppBar>
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={12}>
        <ReduxCounter id={COUNTER_NAME} />
      </Grid>
      <Grid item xs={4}>
        <NoMemoCard countId={COUNTER_NAME} />
      </Grid>
      <Grid item xs={4}>
        <MemoCard countId={COUNTER_NAME} />
      </Grid>
      <Grid item xs={4}>
        <MemoRedundantCard countId={COUNTER_NAME} />
      </Grid>
      <Grid item xs={4}>
        <MemoBrokenCard countId={COUNTER_NAME} />
      </Grid>
      <Grid item xs={4}>
        <MemoBrokenFuncCard countId={COUNTER_NAME} />
      </Grid>
      <Grid item xs={4}>
        <MemoFixedCard countId={COUNTER_NAME} />
      </Grid>
      <Grid item xs={4}>
        <MemoFixedHookCard countId={COUNTER_NAME} />
      </Grid>
      <Grid item xs={4}>
        <MemoChildren countId={COUNTER_NAME} />
      </Grid>
      <Grid item xs={4}>
        <MemoFuncCard />
      </Grid>
      <Grid item xs={4}>
        <MultiMemoCard countId={COUNTER_NAME} />
      </Grid>
    </Grid>
  </Container>
)

export default App
