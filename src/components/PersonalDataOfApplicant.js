import React from 'react';

export default function PersonalDataOfApplicant(){
    return(
        <div className='centered'>
            <div className='loan-section'>
                <h3 className='f-header'>Borrowers Data</h3>

                <div className="input-group">
                    <label for="f-name">First Name <span className="required">*</span></label>
                    <input type="text" id="f-name" />
                </div>

                <div className="input-group">
                    <label for="l-name">Last Name <span className="required">*</span></label>
                    <input type="text" id="l-name" />
                </div>

                <div className="input-group">
                    <label for="personal-code">Personal Code<span className="required">*</span></label>
                    <input type="number" id="personal-code" />
                </div>
            </div>

            <div className='loan-section'>
                <h3 className='f-header'>Extended Data</h3>

                <div className="input-group">
                    <label for="education">Education<span className="required">*</span></label>

                    <select id="education">
                        <option value="primary">Primary</option>
                        <option value="secondary">Secondary</option>
                        <option value="vocational">Vocational</option>
                        <option value="college">College</option>
                        <option value="higher">Higher</option>
                    </select>
                </div>

                <div className="input-group">
                    <label for="position-held">Position Held<span className="required">*</span></label>

                    <select id="position-held">
                        <option value="primary">Worker</option>
                        <option value="secondary">Specialist/Office worker</option>
                        <option value="vocational">Superior Specialist</option>
                        <option value="college">Student</option>
                        <option value="higher">At Home</option>
                        <option value="higher">Pensioner</option>
                        <option value="higher">Executive</option>
                    </select>
                </div>
            </div>
        </div>
    )
}