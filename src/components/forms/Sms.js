import React from 'react';
import { countryCodes } from '../../utils/country_codes.js';
import { MdTextsms } from 'react-icons/md';
import { useAppContext } from '../../context/app_context';

function Sms() {
    const { updateState } = useAppContext();

    return (
        <div className='card pt-4 mb-5'>
            <div className='card-body'>
                <header className='d-flex align-items-center mb-4 form-header'>
                    <div className='icon me-2'>
                        <MdTextsms size='0.9rem' />
                    </div>
                    <h5 className='mb-0'>SMS</h5>
                </header>
                <form className='mb-4'>
                    <div className='row gy-3'>
                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <select
                                    className='form-select'
                                    id='countryCode'
                                    name='country_code'
                                    autoComplete='off'
                                    placeholder='Country Code'
                                    onChange={updateState}
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
                                    onChange={updateState}
                                />
                                <label htmlFor='phone'>Phone Number</label>
                            </div>
                        </div>

                        <div className='col-lg-12'>
                            <div className='form-floating'>
                                <textarea
                                    className='form-control'
                                    id='message'
                                    name='text_message'
                                    autoComplete='off'
                                    placeholder='Message'
                                    onChange={updateState}
                                ></textarea>
                                <label htmlFor='message'>Message</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Sms;
