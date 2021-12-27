import React from 'react';
import Application from './components/Application';
import IncomeAndObl from './components/IncomeAndObl';
import PersonalDataOfApplicant from './components/PersonalDataOfApplicant';
import PersonalData from './components/PersonalData';
import styled from 'styled-components';



function LoanApplication(){
    return (
        <LoanApplicationContainer>
            <h2 className="title">
                Small loan application
            </h2>
            <CardContainer>
                <Card>
                    <Subtitle  style={{backgroundColor: "#c5569a"}}>If you are a Swedbank customer</Subtitle>
                    <p>It is best to complete your application while logged in, as many fields are previously completed. The application enables us to find the most suitable solution for you and make you a personal loan offer. Completing an application does not oblige you to sign an agreement.</p>
                </Card>

                <Card>
                    <Subtitle  style={{backgroundColor: "#5b8ad6"}}>If you are not a Swedbank customer</Subtitle>

                    <p>Completing an application enables us to find the most suitable solution for you and make preliminary assessment of your solvency. Completing an application does not oblige you to sign an agreement.
                    </p>

                    <CompleteAppBtn type="button">
                        Complete an application
                    </CompleteAppBtn>
                </Card>

            </CardContainer>

            <ApplicationContainer>
                <TabContainer>
                    <Tab className="tab">Application</Tab>
                    <Tab className="tab">Income and obligation data </Tab>
                    <Tab className="tab">Personal Data Of Applicant</Tab>
                    <Tab className="tab">Summary</Tab>
                </TabContainer>

                <Application />
                <IncomeAndObl />
                <PersonalDataOfApplicant />
                <PersonalData />
            </ApplicationContainer>
        </LoanApplicationContainer>
    );
}

const LoanApplicationContainer = styled.div`
padding: 10px;
background-color:#fbf2ea;
padding: 10px 100px;
@media (max-width: 768px) {
    padding: 10px 50px;
}
@media (max-width: 640px) {
    padding: 10px 10px;
}
`

const Subtitle = styled.h3`
padding:10px;
color: #fff;
margin: 5px;
`

const Card = styled.div`
background-color: #f9f8f6;
padding: 10px;
margin: 5px;
width: 50%;
@media (max-width: 640px) {
    width: auto;
}
`

const CardContainer = styled.div`
background-color: #ffffff;
padding: 10px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
@media (max-width: 640px) {
    flex-direction: column;
}
`

const CompleteAppBtn = styled.div`
background-color: none;
border: none;
cursor:pointer;
color: #5b8ad6;
width: auto;
&:hover{
    border-bottom: 1px solid #5b8ad6;
    cursor: pointer;
}
`

const ApplicationContainer = styled.div`
background-color: #ffffff;
// display: none;
`

const TabContainer = styled.ul`
list-style-type: none;
width: 100%;
display: flex;
justify-content: center;
`

const Tab = styled.li`
display: inline-box;
padding: 10px;
background-color: #f9f8f6;
color: #5b8ad6;
&:hover{
    cursor: pointer;
    background-color: #f35b1c;
    color: #fff

}
`

export default LoanApplication;