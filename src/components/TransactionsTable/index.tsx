import { Container } from './styles'

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">Kz 50.000,00</td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td>Hamburguer</td>
            <td className="withdraw">- Kz 2.500,00</td>
            <td>Alimentação</td>
            <td>10/04/2022</td>
          </tr>
          <tr>
            <td>Aluguel do apartamento</td>
            <td className="withdraw">- Kz 12.500,00</td>
            <td>Casa</td>
            <td>10/04/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
