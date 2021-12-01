import React from 'react';
import { MdWifi } from 'react-icons/md';
import { useAppContext } from '../../context/app_context';

function Wifi() {
    const { updateState, form_fields } = useAppContext();
    const { network_name, network_type, network_password, network_visibilty } = form_fields;

    function handleInputChange(e) {
        const value = e.target.name === 'network_visibilty' ? e.target.checked : e.target.value;
        const name = e.target.name;
        form_fields[name] = value;
    }

    return (
        <div className='card rounded-lg bdr-top-start-0 bdr-top-end-0 mb-5'>
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
                                    value={network_name}
                                    onChange={updateState}
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
                                    value={network_type}
                                    onChange={updateState}
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
                                    value={network_password}
                                    onChange={updateState}
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
                                    checked={network_visibilty}
                                    onChange={handleInputChange}
                                />
                                <label
                                    className='form-check-label'
                                    htmlFor='networkVisibility'
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
