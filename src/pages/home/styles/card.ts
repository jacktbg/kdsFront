import styled from "styled-components"

const boxShadow = "0 0 0.1rem var(--border-color)"
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(30rem, 23vw, 50rem);
  height: 45%;
  background: var(--sc-bg-color);
  border-radius: 0.1rem;
  box-shadow: ${boxShadow};
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 0 1rem var(--border-color);
  }
`

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.3rem 0.5rem;
  box-shadow: ${boxShadow};
  height: 10%;

  div:nth-child(1) {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 0.5rem;

    div:nth-child(1) {
      background: var(--text-color);
      color: var(--bg-color);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      font-size: clamp(0.5rem, 1.54vh, 2rem);
    }

    div:nth-child(2) {
      display: flex;
      flex-direction: row;
      font-size: clamp(0.5rem, 1.6vh, 2rem);
      column-gap: 0.2rem;

      img {
        height: clamp(0.5rem, 1.8vh, 3rem);
        position: relative;
        top: 0;
        bottom: 0;
        margin: auto;
      }
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: clamp(0.5rem, 1.4vh, 2rem);
  }
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--bg-color);
  box-shadow: ${boxShadow};
  height: 80%;

  & > div {
    display: flex;
    flex-direction: column;
    height: clamp(6rem, 8vh, 10rem);
    transition: box-shadow 0.1s ease-in-out;

    div {
      flex-direction: row;
      height: clamp(3rem, 50%, 5rem);
      display: flex;
      align-items: center;

      div {
        display: flex;
      }
      div:nth-child(1) {
        width: 10%;
        justify-content: center;
      }
      div:nth-child(2) {
        width: 70%;
        justify-content: flex-start;
      }
      div:nth-child(3) {
        color: var(--pending-color);
      }
    }
    & > span {
      margin-left: 10%;
      height: clamp(3rem, 50%, 5rem);
      justify-content: center;
      color: var(--sc-text-color);
      text-transform: capitalize;
    }
    &:hover {
      background: var(--sc-bg-color);
      box-shadow: ${boxShadow};
    }
  }
`

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 10%;
  box-shadow: ${boxShadow};
  padding: 0 0.5rem;
`
