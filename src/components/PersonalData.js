import React from 'react';

export default function PersonalData(props){
    return(
        <div className='centered loan-section' style={{display: props.display}}>
            <h3 className='f-header'>Personal Data</h3>

            <div className="input-group">
                <label for="labour-contract">Type of labour contract <span className="required">*</span></label>

                <select id="position-held">
                    <option value="open-end">Open End</option>
                    <option value="fixed-term">Fixed Term</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="input-group">
                <label for="labour-contract-maturity">Labour contract maturity date<span className="required">*</span></label>

                <input type="date" id="labour-contract-maturity"/>
            </div>

            <div className="input-group">
                <label for="marital-status">Marital Status<span className="required">*</span></label>

                <select id="marital-status">
                    <option value="open-end">Single</option>
                    <option value="fixed-term">Married</option>
                    <option value="other">Common Law Marriage</option>
                    <option value="other">Divorced</option>
                    <option value="other">Widow/Widower</option>
                </select>
            </div>

            <div className="input-group">
                <label for="credit-type">Credit type<span className="required">*</span></label>

                <select id="credit-type">
                    <option value="personal-credit">Personal Credit</option>
                    <option value="family-credit">Family/household credit</option>
                </select>
            </div>
        </div>
    )
}