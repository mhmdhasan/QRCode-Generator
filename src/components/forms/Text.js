import React from 'react';
import { FaTextHeight } from 'react-icons/fa';
import { useAppContext } from '../../context/app_context';

function Text() {
    const { updateState, form_fields } = useAppContext();

    return (
        <div className='card rounded-lg bdr-top-start-0 bdr-top-end-0 mb-5'>
            <div className='card-body'>
                <header className='d-flex align-items-center mb-4 form-header'>
                    <div className='icon me-2'>
                        <FaTextHeight size='0.9rem' />
                    </div>
                    <h5 className='mb-0'>text</h5>
                </header>
                <form>
                    <div className='row gy-3'>
                        <div className='col-lg-12'>
                            <div className='form-floating'>
                                <textarea
                                    className='form-control'
                                    id='text'
                                    type='text'
                                    name='text'
                                    autoComplete='off'
                                    placeholder='Add your text'
                                    value={form_fields.text}
                                    onChange={updateState}
                                />
                                <label htmlFor='text'>Text</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Text;
