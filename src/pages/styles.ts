import styled from "styled-components";

export const DividerNav = styled("div")`
  display: flex;
  gap: 10px;
  flex-direction: row;
`;

export const Grid = styled("div")`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 600px) {
    padding: 40px;
    grid-template-columns: repeat(1, 1fr);
  }
`;
