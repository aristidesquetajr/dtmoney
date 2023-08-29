import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { X, ArrowCircleUp, ArrowCircleDown } from '@phosphor-icons/react'
import { useTransactions } from '../../hooks/useTransactions'

import { Container, RadioBox, TransactionTypeContainer } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions()

  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({ description, amount, category, type })

    setDescription('')
    setAmount(0)
    setCategory('')
    setType('deposit')

    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <X size="1.5rem" />
        </button>

        <h2>Nova transação</h2>

        <input
          placeholder="Descrição"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />

        <input
          type="number"
          placeholder="Preço"
          value={amount}
          onChange={({ target }) => setAmount(Number(target.value))}
        />

        <input
          placeholder="Categoria"
          value={category}
          onChange={({ target }) => setCategory(target.value)}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
            className={type === 'deposit' ? 'active' : ''}
          >
            <ArrowCircleUp size="1.5rem" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
            className={type === 'withdraw' ? 'active' : ''}
          >
            <ArrowCircleDown size="1.5rem" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
