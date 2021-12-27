import React from 'react';

export default function IncomeAndObl (props){
    return(
        <div className='centered' style={{display: props.display}}>
            <div className="input-group">
                <label for="monthly-salary">Monthly Salary After taxes <span className="required">*</span></label>
                <input type="number" id="monthly-salary" />
            </div>

            <div className="input-group">
                <label for="obligations">Do you have obligations outside Swedbank<span className="required">*</span></label>
                <div>
                    <input type="radio" id="obligations" name="obligations" />No
                    <input type="radio" id="obligations" name="obligations"/>Yes
                </div>
            </div>
        </div>
    )
}