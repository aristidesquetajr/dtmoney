import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from './styles'
import { useTransactions } from '../../hooks/useTransactions'

export function Summary() {
  const { transactions } = useTransactions()

  const { deposits, withdraws, total } = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.withdraws += transaction.amount
        acc.total -= transaction.amount
      }

      return acc
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    },
  )

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-AO', {
            style: 'currency',
            currency: 'AOA',
          }).format(deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-AO', {
            style: 'currency',
            currency: 'AOA',
          }).format(withdraws)}
        </strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-Ao', {
            style: 'currency',
            currency: 'AOA',
          }).format(total)}
        </strong>
      </div>
    </Container>
  )
}
