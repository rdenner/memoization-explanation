import { Counter } from '@memoization-explanation/counter'
import { Contact } from '@memoization-explanation/contacts'
import { AppBar, Container, Grid, Toolbar, Typography } from '@mui/material'
import PositiveCard from './cards/positiveCard'
import BadCard from './cards/badCard'
import GoodCard from './cards/goodCard'
import BetterCard from './cards/betterCard'
import ArgCard from './cards/argCard'

const COUNTER_NAME = 'my-counter'
const CONTACT_ID = 'my-contact'

export const App = () => (
  <Container>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Redux Selectors</Typography>
      </Toolbar>
    </AppBar>
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={6}>
        <Counter id={COUNTER_NAME} />
      </Grid>
      <Grid item xs={6}>
        <Contact id={CONTACT_ID} />
      </Grid>
      <Grid item xs={12}>
        <PositiveCard counterId={COUNTER_NAME} />
      </Grid>
      <Grid item xs={4}>
        <BadCard />
      </Grid>
      <Grid item xs={4}>
        <GoodCard />
      </Grid>
      <Grid item xs={4}>
        <BetterCard />
      </Grid>
      <Grid item xs={4}>
        <ArgCard counterId={COUNTER_NAME} contactId={CONTACT_ID} />
      </Grid>
    </Grid>
  </Container>
)

export default App
