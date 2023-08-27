import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

interface Transaction {
  id: number
  description: string
  amount: number
  type: string
  category: string
  createdAt: string
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('/transactions').then((response) => {
      setTransactions(response.data.transactions)
    })
  }, [])

  return (
    <Container>
      <table>
        <thead aria-hidden="true">
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-AO', {
                  style: 'currency',
                  currency: 'AOA',
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-AO').format(
                  new Date(transaction.createdAt),
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
