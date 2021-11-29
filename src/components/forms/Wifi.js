import React from 'react';
import { MdWifi } from 'react-icons/md';

function Wifi() {
    return (
        <div className='card pt-4 mb-5'>
            <div className='card-body'>
                <header className='d-flex align-items-center mb-4 form-header'>
                    <div className='icon me-2'>
                        <MdWifi size='0.9rem' />
                    </div>
                    <h5 className='mb-0'>Wifi</h5>
                </header>

                <form className='mb-4'>
                    <div className='row gy-3'>
                        <div className='col-lg-4'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='networkName'
                                    type='text'
                                    name='network_name'
                                    autoComplete='off'
                                    placeholder='Network Name'
                                />
                                <label htmlFor='networkName'>Network Name</label>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='form-floating'>
                                <select
                                    className='form-select'
                                    id='networkType'
                                    name='network_type'
                                    autoComplete='off'
                                    placeholder='Newtwork Type'
                                >
                                    <option value='WEP'>WEP</option>
                                    <option value='WPA/WPA2'>WPA/WPA2</option>
                                    <option value='NoEncryption'>No Encryption</option>
                                </select>
                                <label htmlFor='networkType'>Newtwork Type</label>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='networkPassword'
                                    type='text'
                                    name='network_password'
                                    autoComplete='off'
                                    placeholder='Network Password'
                                />
                                <label htmlFor='networkPassword'>Network Password</label>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='form-check mb-0'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='network_visibilty'
                                    id='networkVisibility'
                                />
                                <label
                                    className='form-check-label'
                                    for='networkVisibility'
                                    style={{ paddingTop: '0.1rem' }}
                                >
                                    Hidden
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Wifi;
