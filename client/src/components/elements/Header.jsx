import React from 'react';
import { StyledHeader } from "../styles/StyledHeader";


const Header = ({label}) => (
    <StyledHeader>
        <div className='header-content'>
            {label}
        </div>
    </StyledHeader>
);

export default Header;