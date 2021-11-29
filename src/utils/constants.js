import React from 'react';
import { FaLink, FaTextHeight, FaRegEnvelope, FaPhoneAlt, FaBitcoin } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { MdTextsms, MdWifi } from 'react-icons/md';
import { AiOutlineIdcard, AiTwotoneCalendar } from 'react-icons/ai';

export const types = [
    { icon: <FaLink size='1.3rem' className='mb-2' />, text: 'link' },
    { icon: <FaTextHeight size='1.3rem' className='mb-2' />, text: 'text' },
    { icon: <FaRegEnvelope size='1.3rem' className='mb-2' />, text: 'email' },
    { icon: <ImLocation size='1.3rem' className='mb-2' />, text: 'location' },
    { icon: <FaPhoneAlt size='1.3rem' className='mb-2' />, text: 'phone' },
    { icon: <MdTextsms size='1.3rem' className='mb-2' />, text: 'sms' },
    { icon: <MdWifi size='1.3rem' className='mb-2' />, text: 'wifi' },
    { icon: <AiOutlineIdcard size='1.3rem' className='mb-2' />, text: 'vcard' },
    { icon: <AiTwotoneCalendar size='1.3rem' className='mb-2' />, text: 'event' },
    { icon: <FaBitcoin size='1.3rem' className='mb-2' />, text: 'bitcoin' },
];
