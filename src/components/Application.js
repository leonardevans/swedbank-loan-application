import React from 'react';
import styled from 'styled-components';

export default function Application (){
    return (
        <ApplicationCont className='centered'>
            <div className="input-group">
                <label for="loan-amount">Loan Amount <span className="required">*</span></label>
                <input type="number" id="loan-amount" />
            </div>

            <div className="input-group">
                <label for="loan-term">Loan Term <span className="required">*</span></label>
                <input type="number" id="loan-term" />
            </div>

            <div className="input-group">
                <label for="reyment-date">Prefered repayment date <span className="required">*</span></label>
                <select id="reyment-date">
                    <option value="3">3</option>
                    <option value="7">7</option>
                    <option value="12">17</option>
                    <option value="22">22</option>
                    <option value="27">27</option>
                </select>
            </div>
        </ApplicationCont>
    );
}

const ApplicationCont = styled.div`

`