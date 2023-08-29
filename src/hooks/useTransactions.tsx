import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'

interface Transaction {
  id: number
  description: string
  amount: number
  type: string
  category: string
  createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
  searchTransactions: (description: string) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData,
)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('/transactions').then((response) => {
      setTransactions(response.data.transactions)
    })
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    })
    const { transaction } = response.data

    setTransactions([...transactions, transaction])
  }

  async function searchTransactions(description: string) {
    const transactions = (await (
      await api.get('/transactions')
    ).data.transactions) as Transaction[]

    setTransactions(() => {
      const newTransactions = transactions.filter((transaction) =>
        transaction.description
          .toLowerCase()
          .includes(description.toLowerCase()),
      )

      return newTransactions
    })
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, createTransaction, searchTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}
