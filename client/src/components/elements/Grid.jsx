import React from 'react';
import { StyledGrid, StyledGridContent } from "../styles/StyledGrid";


const Grid = ({header, children}) => (
    <StyledGrid>
        <p>{header}</p>
        <StyledGridContent>
            {children}
        </StyledGridContent>
    </StyledGrid>
);

export default Grid;