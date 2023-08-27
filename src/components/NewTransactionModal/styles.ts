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
    font-weight: 700;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1.5rem 0 2.5rem;

  button {
    height: 3.7rem;
    background: var(--shape-2sn);
    border: 0;
    border-radius: 0.38rem;

    display: flex;
    align-items: center;
    justify-content: center;
    filter: brightness(0.9);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(1);
    }

    img {
      width: 1.5rem;
      height: 1.5rem;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-base);
    }
  }
`
