import React from 'react';
import { IoMdDownload } from 'react-icons/io';
import PreviewLoader from './PreviewLoader';
import { useAppContext } from '../context/app_context';

function Preview() {
    const { preview_loader } = useAppContext();

    return (
        <div className='col-lg-3 order-2 order-lg-1'>
            <div className='card mb-3'>
                <div className='card-body'>
                    <div className='preview-holder'>
                        {preview_loader ? <PreviewLoader /> : null}
                        <img className='img-fluid opacity-2 mb-4' src='img/qr-code.png' alt='QR code' />
                    </div>
                    <button
                        className='btn btn-dark w-100'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#saveCode'
                    >
                        <IoMdDownload size='1.2rem' className='me-2' />
                        Save
                    </button>
                    <div className='collapse fade' id='saveCode'>
                        <div className='p-3 bg-light mt-3'>this is test</div>
                    </div>
                </div>
            </div>
            <div className='alert alert-info rounded' role='alert'>
                Make sure Background and foreground colors have a sufficient contrast ratio
            </div>
        </div>
    );
}

export default Preview;
