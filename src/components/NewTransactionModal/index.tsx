import Modal from 'react-modal'

import { X } from '@phosphor-icons/react'

import { Container } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
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

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
