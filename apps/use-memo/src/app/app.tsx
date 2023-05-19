import { AppBar, Container, Grid, Toolbar, Typography } from '@mui/material'
import { Counter } from '@memoization-explanation/counter'
import { Contact } from '@memoization-explanation/contacts'
import BadMemoCard from './cards/badMemoCard'
import TodoCardNoMemo from './cards/todo/noMemo/todoCard'
import TodoCardNoCallback from './cards/todo/noUseCallback/todoCard'
import TodoCardMemo from './cards/todo/memo/todoCard'
import BadMemoCard2 from './cards/badMemoCard2'

const COUNTER_NAME = 'my-counter'
const CONTACT_ID = 'my-contact'

export const App = () => (
  <Container>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Memo</Typography>
      </Toolbar>
    </AppBar>
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={6}>
        <Counter id={COUNTER_NAME} />
      </Grid>
      <Grid item xs={6}>
        <Contact id={CONTACT_ID} />
      </Grid>
      <Grid item xs={4}>
        <TodoCardNoMemo countId={COUNTER_NAME} />
      </Grid>
      <Grid item xs={4}>
        <TodoCardNoCallback countId={COUNTER_NAME} />
      </Grid>
      <Grid item xs={4}>
        <TodoCardMemo countId={COUNTER_NAME} />
      </Grid>
      <Grid item xs={6}>
        <BadMemoCard />
      </Grid>
      <Grid item xs={6}>
        <BadMemoCard2 />
      </Grid>
    </Grid>
  </Container>
)

export default App
