import Modal from 'react-modal'
import { X, ArrowCircleUp, ArrowCircleDown } from '@phosphor-icons/react'

import { Container, RadioBox, TransactionTypeContainer } from './styles'
import { useState } from 'react'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit')

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <X size="1.5rem" />
        </button>

        <h2>Nova transação</h2>

        <input placeholder="Descrição" />

        <input type="number" placeholder="Preço" />

        <input placeholder="Categoria" />

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
