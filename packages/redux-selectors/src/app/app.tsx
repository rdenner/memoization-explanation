import { Counter } from '@memoization-explanation/counter'
import { AppBar, Container, Grid, Toolbar, Typography } from '@mui/material'
import PositiveCard from './cards/positiveCard'
import InefficientCard from './cards/inefficientCard'
import EfficientCard from './cards/efficientCard'

const COUNTER_NAME = 'my-counter'

export const App = () => (
  <Container>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Redux Selectors</Typography>
      </Toolbar>
    </AppBar>
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={12}>
        <Counter id={COUNTER_NAME} />
      </Grid>
      <Grid item xs={4}>
        <PositiveCard counterId={COUNTER_NAME} />
      </Grid>
      <Grid item xs={4}>
        <InefficientCard />
      </Grid>
      <Grid item xs={4}>
        <EfficientCard />
      </Grid>
    </Grid>
  </Container>
)

export default App
