import { MagnifyingGlass } from '@phosphor-icons/react'

import { Container } from './styles'

export function SearchBar() {
  return (
    <Container>
      <input type="text" placeholder="Busque uma transação" />
      <button type="submit">
        <MagnifyingGlass size="20" />
        Buscar
      </button>
    </Container>
  )
}
