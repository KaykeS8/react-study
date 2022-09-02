import styled from "styled-components";

export const SectionCont = styled("section")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media (max-width:600px) {
    grid-template-columns: 1fr;
    padding: 40px;
  }
`