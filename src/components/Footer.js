import React from 'react';
import { FaHeart } from 'react-icons/fa';

function Footer() {
    return (
        <footer className='p-4 card rounded-0 text-center mt-4'>
            <p className='text-gray-700 text-center mb-0'>
                Made with <FaHeart className='text-info mx-2' size='1rem' />
                <span className='me-2'>By</span>
                <a
                    className='text-info text-decoration-none'
                    href='https://ionichub.co/'
                    target='_blank'
                    rel='noreferrer'
                >
                    Ionichub.co
                </a>
                . &copy; All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
