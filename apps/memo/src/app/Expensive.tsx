import { map, range } from 'lodash'
import styled from 'styled-components'

const ExpensiveStyled = styled.ul`
  overflow-y: scroll;
  height: 200px;
`

const Expensive = () => (
  <ExpensiveStyled>
    {map(range(0, 1000), (v) => (
      <li key={v}>{v}</li>
    ))}
  </ExpensiveStyled>
)

export default Expensive
