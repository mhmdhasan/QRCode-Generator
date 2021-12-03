import React from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import { useAppContext } from '../../context/app_context';

function Email() {
    const { updateState, form_fields } = useAppContext();
    const { email_address, email_subject, email_text } = form_fields;

    return (
        <div className='card rounded-lg bdr-top-start-0 bdr-top-end-0 mb-5'>
            <div className='card-body'>
                <header className='d-flex align-items-center mb-4 form-header'>
                    <div className='icon me-2'>
                        <FaRegEnvelope size='0.9rem' />
                    </div>
                    <h5 className='mb-0'>Email</h5>
                </header>
                <form className='needs-validation' novalidation='true'>
                    <div className='row gy-3'>
                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='email'
                                    type='email'
                                    name='email_address'
                                    autoComplete='off'
                                    placeholder='e.g. Jason@doe.com'
                                    pattern='.*\S+.*'
                                    value={email_address}
                                    onInput={updateState}
                                    required={true}
                                />
                                <label htmlFor='email'>Send to</label>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='subject'
                                    type='text'
                                    name='email_subject'
                                    autoComplete='off'
                                    placeholder='Type email subject'
                                    value={email_subject}
                                    onInput={updateState}
                                />
                                <label htmlFor='subject'>Subject</label>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='form-floating'>
                                <textarea
                                    className='form-control'
                                    id='message'
                                    name='email_text'
                                    autoComplete='off'
                                    placeholder='Add email text body'
                                    value={email_text}
                                    onInput={updateState}
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

export default Email;
