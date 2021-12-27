import logo from '../swedbank-logo.svg';
import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


function Navbar(){
    return(
        <NavContainer>
             <Link to="/">
             <img src={logo} alt="swedbank logo" style={{width:150, height:50, padding: "5px" }} />
                </Link>
        </NavContainer>
    );
}

const NavContainer = styled.nav`
padding: 10px;
padding: 10px 100px;
@media (max-width: 768px) {
    padding: 10px 50px;
}
@media (max-width: 640px) {
    padding: 10px 10px;
}
`

export default Navbar;
