import React from 'react';
import { logos } from '../../utils/constants';
import { useAppContext } from '../../context/app_context';
import { CgClose } from 'react-icons/cg';

function LogoSettings({ tabId, visibility }) {
    const { updateLogo } = useAppContext();

    return (
        <div className={`tab-pane fade ${visibility}`} id={tabId} role='tabpanel' aria-labelledby={`${tabId}-tab`}>
            <form>
                <header className='mb-3'>
                    <label className='form-label'>Choose Logo</label>
                </header>
                <div className='d-flex flex-wrap'>
                    <div className='m-1'>
                        <input
                            type='radio'
                            className='btn-check'
                            name='logo'
                            id='noLogo'
                            autoComplete='off'
                            value='no_logo'
                            defaultChecked
                        />
                        <label className='btn btn-outline-secondary border-0 p-2' htmlFor='noLogo' onClick={updateLogo}>
                            <CgClose size='1.5rem' className='text-dark' />
                        </label>
                    </div>
                    {logos.map((logo, index) => {
                        return (
                            <div className='m-1' key={index}>
                                <input
                                    type='radio'
                                    className='btn-check'
                                    name='logo'
                                    id={index}
                                    autoComplete='off'
                                    value={logo.src}
                                />
                                <label
                                    className='btn btn-outline-secondary border-0 p-2'
                                    htmlFor={index}
                                    onClick={updateLogo}
                                >
                                    <img src={logo.src} alt={logo.name} height='30' width='30' className='img-fluid' />
                                </label>
                            </div>
                        );
                    })}
                </div>
            </form>
        </div>
    );
}

export default LogoSettings;
