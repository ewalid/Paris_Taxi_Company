import styled from 'styled-components';

export const StyledGrid = styled.div`
  margin: 0 auto;
  padding: 0 5%;
  
  p {
    font-style: italic;
    font-family: ui-monospace;
    font-size: 20px;
    margin-bottom: 50px;
    text-decoration: underline;
  }
`;

export const StyledGridContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  position: relative;
`;

