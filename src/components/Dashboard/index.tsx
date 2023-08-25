import { Pagination } from '../Pagination'
import { SearchBar } from '../SearchBar'
import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'
import { Cointainer } from './styles'

export function Dashboard() {
  return (
    <Cointainer>
      <Summary />
      <SearchBar />
      <TransactionsTable />
      <Pagination />
    </Cointainer>
  )
}
