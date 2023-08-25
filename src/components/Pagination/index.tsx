import { CaretLeft, CaretRight } from '@phosphor-icons/react'

import { Container } from './styles'

export function Pagination() {
  return (
    <Container>
      <button>
        <CaretLeft weight="bold" size="24" />
      </button>
      <button className="active">1</button>
      <button>2</button>
      <button>3</button>
      <button>
        <CaretRight weight="bold" size="24" />
      </button>
    </Container>
  )
}
