import { styled } from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    color: var(--text-base);

    thead {
      display: none;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape-2sn);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`
