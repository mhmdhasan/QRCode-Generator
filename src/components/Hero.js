import React from 'react';
import { FaReact, FaLaravel } from 'react-icons/fa';
import { MdQrCode } from 'react-icons/md';

function Hero() {
    return (
        <section className='p-4 p-lg-5'>
            <div className='container'>
                <div className='rounded-lg p-4 p-lg-5 bg-dark text-white position-relative'>
                    <div className='row p-4 p-lg-5 gy-4'>
                        <div className='col-xl-9'>
                            <div className='d-flex flex-column flex-lg-row'>
                                <div className='flex-shrink-0'>
                                    <MdQrCode size='10.5rem' />
                                </div>
                                <div className='ms-lg-4'>
                                    <h1>QR Code generator</h1>
                                    <p className='text-gray-500 mb-1'>Generate your personal QR Code in few clicks!</p>
                                    <p className='text-gray-500 mb-1'>
                                        Upload your logo, select custom colors and download the final QRcode.
                                    </p>
                                    <p className='text-gray-500 mb-1'>Available formats: .png, .svg</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='position-absolute bottom-0 end-0 p-4 d-none d-lg-block'>
                        <p className='mb-0'>
                            <span className='text-gray-600 text-sm'>Powered by </span>
                            <FaReact className='ms-2' size='1.3rem' />
                            <FaLaravel className='ms-2' size='1.3rem' />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
