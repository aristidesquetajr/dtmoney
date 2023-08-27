import { styled } from 'styled-components'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    margin-bottom: 2rem;
    font-size: 1.5rem;
    line-height: 2.1rem;
  }

  input {
    width: 100%;
    padding: 1rem;
    border-radius: 0.38rem;

    border: 0;
    background: var(--background);

    font-weight: 400;
    font-size: 1rem;

    color: var(--white);

    &:focus {
      outline: 1px solid var(--green);
    }

    &::placeholder {
      color: var(--placeholder);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 1rem 2rem;
    background: var(--green);
    color: var(--white);
    border-radius: 0.38rem;
    border: 0;
    font-size: 1rem;
    line-height: 1.6rem;
    margin-top: 1.5rem;
    font-weight: 700;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
