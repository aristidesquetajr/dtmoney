import { styled } from 'styled-components'

export const Container = styled.nav`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  button {
    flex: 0 0 2.5rem;
    height: 2.5rem;
    border: 0;
    border-radius: 0.25rem;
    background: var(--shape-3rd);
    color: var(--text-base);
    font-size: 1rem;

    transition: filter 0.2s;

    &:hover,
    svg:hover {
      filter: brightness(0.9);
    }

    svg {
      vertical-align: middle;
      transition: filter 0.2s;
    }

    &:first-child,
    &:last-child {
      background: transparent;
    }

    &.active {
      background: var(--green);
      color: var(--white);
    }

    &:first-child svg {
      color: var(--shape-3rd);
    }

    &:last-child svg {
      color: var(--green);
    }
  }
`
