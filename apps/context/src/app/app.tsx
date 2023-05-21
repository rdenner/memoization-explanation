import { AppBar, Container, Grid, Toolbar, Typography } from '@mui/material'
import {
  ContextCounter,
  counterContext,
} from '@memoization-explanation/counter'
import BadBasicCard from './cards/badBasicCard'
import BadMapCard from './cards/badMapCard'
import GoodBasicCard from './cards/goodBasicCard'
import BrokenMapCard from './cards/brokenMapCard'
import FixedMapCard from './cards/fixedMapCard'

const CounterContextProvider = counterContext.CounterContextProvider

const COUNTER_NAME = 'my-counter'

export const App = () => (
  <Container>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Contexts</Typography>
      </Toolbar>
    </AppBar>
    <CounterContextProvider>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <ContextCounter id={COUNTER_NAME} />
        </Grid>
        <Grid item xs={4}>
          <BadBasicCard id={COUNTER_NAME} />
        </Grid>
        <Grid item xs={4}>
          <BadMapCard />
        </Grid>
        <Grid item xs={4}>
          <GoodBasicCard id={COUNTER_NAME} />
        </Grid>
        <Grid item xs={4}>
          <BrokenMapCard />
        </Grid>
        <Grid item xs={4}>
          <FixedMapCard />
        </Grid>
      </Grid>
    </CounterContextProvider>
  </Container>
)

export default App
