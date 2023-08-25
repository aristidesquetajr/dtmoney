import { styled } from 'styled-components'

export const Container = styled.form`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 8rem;
  grid-template-rows: 3rem;
  gap: 1rem;

  input {
    padding-inline: 1rem;
    background: var(--background);
    border: 0;
    border-radius: 0.25rem;
    color: var(--white);

    &:focus {
      outline: 1px solid var(--green);
    }

    &::placeholder {
      color: var(--placeholder);
    }
  }

  button {
    background: transparent;
    border: 1px solid var(--green);
    border-radius: 0.25rem;
    color: var(--green);

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    transition: all 0.2s;

    &:hover {
      background: var(--green);
      color: var(--white);
    }
  }
`
