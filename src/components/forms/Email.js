import React from 'react';
import { FaRegEnvelope } from 'react-icons/fa';

function Email() {
    return (
        <div className='card pt-4 mb-5'>
            <div className='card-body'>
                <header className='d-flex align-items-center mb-4 form-header'>
                    <div className='icon me-2'>
                        <FaRegEnvelope size='0.9rem' />
                    </div>
                    <h5 className='mb-0'>Email</h5>
                </header>
                <form>
                    <div className='row gy-3'>
                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='email'
                                    type='text'
                                    name='email_address'
                                    autoComplete='off'
                                    placeholder='e.g. Jason@doe.com'
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
