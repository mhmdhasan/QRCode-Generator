import React from 'react';
import { FaLink } from 'react-icons/fa';
import { useAppContext } from '../../context/app_context';

function Link() {
    const { updateState, form_fields } = useAppContext();

    return (
        <div className='card rounded-lg bdr-top-start-0 bdr-top-end-0 mb-5'>
            <div className='card-body'>
                <header className='d-flex align-items-center mb-4 form-header'>
                    <div className='icon me-2'>
                        <FaLink size='0.9rem' />
                    </div>
                    <h5 className='mb-0'>Link</h5>
                </header>
                <form className='needs-validation' novalidation='true'>
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
                                    value={form_fields.url}
                                    onInput={updateState}
                                    pattern='.*\S+.*'
                                    required={true}
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
