import React from 'react';
import { FaTextHeight } from 'react-icons/fa';

function Text() {
    return (
        <div className='card pt-4 mb-5'>
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
