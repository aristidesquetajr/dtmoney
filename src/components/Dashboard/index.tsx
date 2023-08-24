import { Summary } from '../Summary'
import { TransitionsTable } from '../TransitionsTable'
import { Cointainer } from './styles'

export function Dashboard() {
  return (
    <Cointainer>
      <Summary />
      <TransitionsTable />
    </Cointainer>
  )
}
