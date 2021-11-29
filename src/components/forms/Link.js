import React from 'react';
import { FaLink } from 'react-icons/fa';
import { useAppContext } from '../../context/app_context';

function Link() {
    const { updateState } = useAppContext();

    return (
        <div className='card pt-4 mb-5'>
            <div className='card-body'>
                <header className='d-flex align-items-center mb-4 form-header'>
                    <div className='icon me-2'>
                        <FaLink size='0.9rem' />
                    </div>
                    <h5 className='mb-0'>Link</h5>
                </header>
                <form>
                    <div className='row gy-3'>
                        <div className='col-lg-12'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='url'
                                    type='text'
                                    name='url'
                                    autoComplete='off'
                                    placeholder='e.g. Jason@doe.com'
                                    onChange={updateState}
                                />
                                <label htmlFor='url'>Url</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Link;
