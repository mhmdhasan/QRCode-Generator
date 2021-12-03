import React, { useEffect } from 'react';
import { IoMdDownload } from 'react-icons/io';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import PreviewLoader from './PreviewLoader';
import { useAppContext } from '../context/app_context';
import PreviewError from './PreviewError';

function Preview() {
    const { preview_loader, preview_error } = useAppContext();

    useEffect(() => {
        if (document.querySelector('#imgPreview svg')) {
            document.querySelector('#imgPreview svg').style.height = '100%';
            document.querySelector('#imgPreview svg').style.width = '100%';
        }
    }, []);

    return (
        <div className='col-lg-3 order-2 order-lg-1'>
            <div className='card mb-3'>
                <div className='card-body'>
                    <div className='preview-holder'>
                        {preview_loader ? <PreviewLoader /> : null}
                        <div id='imgPreview' className='w-100'></div>
                        {preview_error ? <PreviewError /> : null}
                    </div>

                    <button
                        className='btn btn-dark w-100'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#saveCode'
                        disabled={preview_error ? true : false}
                    >
                        <IoMdDownload size='1.2rem' className='me-2' />
                        Save
                    </button>

                    <div className='collapse fade' id='saveCode'>
                        <div className='d-flex align-items-center justify-content-center pt-3'>
                            <button className='btn btn-link shadow-0 p-0 mx-1'>
                                <img src='img/file-png.svg' alt='png' width='40' />
                            </button>
                            <button className='btn btn-link shadow-0 p-0 mx-1'>
                                <img src='img/file-svg.svg' alt='png' width='40' />
                            </button>
                            <button className='btn btn-link shadow-0 p-0 mx-1'>
                                <img src='img/file-eps.svg' alt='png' width='40' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='alert alert-primary rounded' role='alert'>
                <BsFillInfoCircleFill className='me-2 mb-1' size='1.1rem' />
                Make sure Background and foreground colors have a sufficient contrast ratio
            </div>
        </div>
    );
}

export default Preview;
