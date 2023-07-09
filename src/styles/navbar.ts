import styled from "styled-components"

export const NavbarContainer = styled.header`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  img {
    width: clamp(9rem, 10vw, 20rem);
  }

  div {
    & > p {
      font-size: clamp(2rem, 2.8vh, 3rem);
    }
  }

  nav {
    ul {
      li {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: clamp(1.5rem, 2vh, 3rem);
        width: clamp(10rem, 7vw, 12rem);
        height: clamp(3.3rem, 4.5vh, 5rem);
        background: var(--sc-bg-color);
        cursor: pointer;
        border-radius: 0.1rem;
        box-shadow: 0 0 0.1rem var(--border-color);
        transition: box-shadow 0.2s ease-in-out;

        &:hover {
          box-shadow: 0 0 0.5rem var(--border-color);
        }
      }
    }
  }
`
