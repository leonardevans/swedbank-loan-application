import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from './components/Button';
import styled from 'styled-components';

function Home(){
    return(
        <HomeContainer>
            <h2 className="title">Consumer Loan</h2>
            <h2 className="sub-title">Loans that help</h2>
            <p>A small loan is a great solution if you need to renovate your home, buy new furniture for the terrace, repair your car or to finance your next big thing.</p>
            <ul>
                <li>Borrow from 500 up to 20 000 € without collateral.</li>
                <li>Annual interest rate from 11,9 percent.</li>
                <li>Money is transferred to the account immediately after the conclusion of the contract.</li>
                <li>It is possible to make early repayments without any additional fees.</li>
            </ul>

            <Link to="/apply-loan">
                <Button>Fill in application</Button>
            </Link>

            <p>Please note, that by using financial services you assume financial obligations. Improper execution of financial obligations may adversely affect your credit history and raise the cost of borrowing, and it can also cause initiation of enforced recovery.</p>
        </HomeContainer>
    );
}

const HomeContainer = styled.div`
padding: 10px;
background-color:#fbf2ea;
padding: 10px 100px;
font-weight: bold;
@media (max-width: 768px) {
    padding: 10px 50px;
}
@media (max-width: 640px) {
    padding: 10px 10px;
}
`

export default Home;