import { MagnifyingGlass } from '@phosphor-icons/react'

import { FormEvent, useEffect, useState } from 'react'

import { Container } from './styles'
import { useTransactions } from '../../hooks/useTransactions'

export function SearchBar() {
  const { searchTransactions } = useTransactions()

  const [search, setSearch] = useState('')

  function handleSearchTransactions(event: FormEvent) {
    event.preventDefault()

    searchTransactions(search)
  }

  useEffect(() => {
    searchTransactions(search)
  }, [search])

  return (
    <Container onSubmit={handleSearchTransactions}>
      <input
        type="text"
        placeholder="Busque uma transação"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
      <button type="submit">
        <MagnifyingGlass size="20" />
        Buscar
      </button>
    </Container>
  )
}
