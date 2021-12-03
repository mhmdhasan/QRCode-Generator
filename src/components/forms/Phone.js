import React from 'react';
import { countryCodes } from '../../utils/country_codes.js';
import { FaPhoneAlt } from 'react-icons/fa';
import { useAppContext } from '../../context/app_context';

function Phone() {
    const { updateState, form_fields } = useAppContext();
    const { country_code, phone_number } = form_fields;

    return (
        <div className='card rounded-lg bdr-top-start-0 bdr-top-end-0 mb-5'>
            <div className='card-body'>
                <header className='d-flex align-items-center mb-4 form-header'>
                    <div className='icon me-2'>
                        <FaPhoneAlt size='0.9rem' />
                    </div>
                    <h5 className='mb-0'>Phone</h5>
                </header>
                <form className='needs-validation' novalidation='true'>
                    <div className='row gy-3'>
                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <select
                                    className='form-select'
                                    id='countryCode'
                                    name='country_code'
                                    autoComplete='off'
                                    placeholder='Country Code'
                                    value={country_code}
                                    onInput={updateState}
                                    required={true}
                                >
                                    {countryCodes.map((code, index) => {
                                        return (
                                            <option value={code.dial_code} key={index}>
                                                {code.name} ({code.dial_code})
                                            </option>
                                        );
                                    })}
                                </select>
                                <label htmlFor='countryCode'>Country Code</label>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='phone'
                                    type='tel'
                                    name='phone_number'
                                    autoComplete='off'
                                    placeholder='Phone Number'
                                    pattern='.*\S+.*'
                                    value={phone_number}
                                    onInput={updateState}
                                    required={true}
                                />
                                <label htmlFor='phone'>Phone Number</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Phone;
