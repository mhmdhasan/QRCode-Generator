import React from 'react';
import { AiOutlineIdcard } from 'react-icons/ai';
import { countryCodes } from '../../utils/country_codes.js';
import { useAppContext } from '../../context/app_context';

function Vcard() {
    const { updateState } = useAppContext();

    return (
        <div className='card pt-4 mb-5'>
            <div className='card-body'>
                <header className='d-flex align-items-center mb-4 form-header'>
                    <div className='icon me-2'>
                        <AiOutlineIdcard size='0.9rem' />
                    </div>
                    <h5 className='mb-0'>VCard</h5>
                </header>

                <form className='mb-4'>
                    <div className='row gy-3'>
                        <div className='col-lg-12'>
                            <div className='form-floating'>
                                <select
                                    className='form-select'
                                    id='vcardVersion'
                                    type='text'
                                    name='vcard_version'
                                    autoComplete='off'
                                    placeholder='Version'
                                    onChange={updateState}
                                >
                                    <option value='2.1'>2.1</option>
                                    <option value='3.0'>3.0</option>
                                </select>
                                <label htmlFor='vcardVersion'>Version</label>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='vcardTitle'
                                    type='text'
                                    name='vcard_title'
                                    autoComplete='off'
                                    placeholder='Title'
                                    onChange={updateState}
                                />
                                <label htmlFor='vcardTitle'>Title</label>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='vcardFirstname'
                                    type='text'
                                    name='vcard_firstname'
                                    autoComplete='off'
                                    placeholder='Firs Name'
                                    onChange={updateState}
                                />
                                <label htmlFor='vcardFirstname'>Firs Name</label>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='vcardLastname'
                                    type='text'
                                    name='vcard_lastname'
                                    autoComplete='off'
                                    placeholder='Last Name'
                                    onChange={updateState}
                                />
                                <label htmlFor='vcardLastname'>Last Name</label>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='input-group flex-nowrap'>
                                <div className='form-floating px-0'>
                                    <select
                                        className='form-select'
                                        id='homeCountryCode'
                                        name='home_country_code'
                                        autoComplete='off'
                                        placeholder='Country Code'
                                        onChange={updateState}
                                    >
                                        {countryCodes.map((code, index) => {
                                            return (
                                                <option value={code.dial_code} key={index}>
                                                    {code.dial_code}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    <label htmlFor='homeCountryCode'>+00</label>
                                </div>
                                <div className='form-floating flex-grow-1'>
                                    <input
                                        className='form-control'
                                        id='vcardPhoneHome'
                                        type='tel'
                                        name='vcard_phone_home'
                                        autoComplete='off'
                                        placeholder='Phone (home)'
                                        onChange={updateState}
                                    />
                                    <label htmlFor='vcardPhoneHome'>Phone (home)</label>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='input-group flex-nowrap'>
                                <div className='form-floating px-0'>
                                    <select
                                        className='form-select'
                                        id='mobileCountryCode'
                                        name='mobile_country_code'
                                        autoComplete='off'
                                        placeholder='Country Code'
                                        onChange={updateState}
                                    >
                                        {countryCodes.map((code, index) => {
                                            return (
                                                <option value={code.dial_code} key={index}>
                                                    {code.dial_code}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    <label htmlFor='mobileCountryCode'>+00</label>
                                </div>
                                <div className='form-floating flex-grow-1'>
                                    <input
                                        className='form-control'
                                        id='vcardPhoneMobile'
                                        type='tel'
                                        name='vcard_phone_mobile'
                                        autoComplete='off'
                                        placeholder='Phone (mobile)'
                                        onChange={updateState}
                                    />
                                    <label htmlFor='vcardPhoneMobile'>Phone (mobile)</label>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='vcardEmail'
                                    type='email'
                                    name='vcard_email'
                                    autoComplete='off'
                                    placeholder='Email'
                                    onChange={updateState}
                                />
                                <label htmlFor='vcardEmail'>Email</label>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='vcardWebsite'
                                    type='text'
                                    name='vcard_website'
                                    autoComplete='off'
                                    placeholder='http://'
                                    onChange={updateState}
                                />
                                <label htmlFor='vcardWebsite'>Website (URL)</label>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='vcardCompany'
                                    type='text'
                                    name='vcard_company'
                                    autoComplete='off'
                                    placeholder='http://'
                                    onChange={updateState}
                                />
                                <label htmlFor='vcardCompany'>Company</label>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='vcardJobTitle'
                                    type='text'
                                    name='vcard_job'
                                    autoComplete='off'
                                    placeholder='Job Title'
                                    onChange={updateState}
                                />
                                <label htmlFor='vcardJobTitle'>Job Title</label>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='input-group flex-nowrap'>
                                <div className='form-floating px-0'>
                                    <select
                                        className='form-select'
                                        id='officeCountryCode'
                                        name='office_country_code'
                                        autoComplete='off'
                                        placeholder='Country Code'
                                        onChange={updateState}
                                    >
                                        {countryCodes.map((code, index) => {
                                            return (
                                                <option value={code.dial_code} key={index}>
                                                    {code.dial_code}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    <label htmlFor='officeCountryCode'>+00</label>
                                </div>
                                <div className='form-floating flex-grow-1'>
                                    <input
                                        className='form-control'
                                        id='vcardPhoneOffice'
                                        type='tel'
                                        name='vcard_phone_office'
                                        autoComplete='off'
                                        placeholder='Phone (office)'
                                        onChange={updateState}
                                    />
                                    <label htmlFor='vcardPhoneOffice'>Phone (office)</label>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='input-group flex-nowrap'>
                                <div className='form-floating px-0'>
                                    <select
                                        className='form-select'
                                        id='faxCountryCode'
                                        name='fax_country_code'
                                        autoComplete='off'
                                        placeholder='Country Code'
                                        onChange={updateState}
                                    >
                                        {countryCodes.map((code, index) => {
                                            return (
                                                <option value={code.dial_code} key={index}>
                                                    {code.dial_code}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    <label htmlFor='faxCountryCode'>+00</label>
                                </div>
                                <div className='form-floating flex-grow-1'>
                                    <input
                                        className='form-control'
                                        id='vcardPhoneFax'
                                        type='tel'
                                        name='vcard_phone_fax'
                                        autoComplete='off'
                                        placeholder='Phone (fax)'
                                        onChange={updateState}
                                    />
                                    <label htmlFor='vcardPhoneFax'>Phone (fax)</label>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-12'>
                            <div className='form-floating'>
                                <textarea
                                    className='form-control'
                                    id='vcardAddress'
                                    name='vcard_address'
                                    autoComplete='off'
                                    placeholder='Address'
                                    onChange={updateState}
                                    style={{ minHeight: '5rem' }}
                                ></textarea>
                                <label htmlFor='vcardAddress'>Address</label>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    type='text'
                                    id='vcardPostCode'
                                    name='vcard_postcode'
                                    autoComplete='off'
                                    placeholder='Post Code'
                                    onChange={updateState}
                                />
                                <label htmlFor='vcardPostCode'>Post Code</label>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    type='text'
                                    id='vcardCity'
                                    name='vcard_city'
                                    autoComplete='off'
                                    placeholder='City'
                                    onChange={updateState}
                                />
                                <label htmlFor='vcardCity'>City</label>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    type='text'
                                    id='vcardState'
                                    name='vcard_state'
                                    autoComplete='off'
                                    placeholder='State'
                                    onChange={updateState}
                                />
                                <label htmlFor='vcardState'>State</label>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    type='text'
                                    id='vcardCountry'
                                    name='vcard_country'
                                    autoComplete='off'
                                    placeholder='Country'
                                    onChange={updateState}
                                />
                                <label htmlFor='vcardCountry'>Country</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Vcard;
