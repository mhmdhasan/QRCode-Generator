import React from 'react';
import { FaLink, FaTextHeight, FaRegEnvelope, FaPhoneAlt, FaBitcoin, FaRulerCombined } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { MdTextsms, MdWifi } from 'react-icons/md';
import { AiOutlineIdcard, AiTwotoneCalendar } from 'react-icons/ai';
import { IoMdColorFill } from 'react-icons/io';
import { BsImage } from 'react-icons/bs';
import { RiQrCodeFill } from 'react-icons/ri';

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

export const steps = ['Choose type', 'Fill the fields', 'Apply options', 'Get QRcode'];

export const settingsNav = [
    { title: 'colors', id: 'colorsOption', icon: <IoMdColorFill size='1.4rem' className='mb-2' /> },
    { title: 'Logo', id: 'logoOption', icon: <BsImage size='1.4rem' className='mb-2' /> },
    { title: 'Design', id: 'design', icon: <RiQrCodeFill size='1.4rem' className='mb-2' /> },
    { title: 'Dimensions', id: 'dimensionsOption', icon: <FaRulerCombined size='1.4rem' className='mb-2' /> },
];

export const codeSize = [200, 300, 400, 500, 600, 700, 800];

export const precision = [
    { value: 'L', name: 'Smallest' },
    { value: 'M', name: 'Medium' },
    { value: 'Q', name: 'Hight' },
    { value: 'H', name: 'Best' },
];

export const gradientDirection = [
    { value: 'vertical', name: 'vertical' },
    { value: 'horizontal', name: 'Horizontal' },
    { value: 'diagonal', name: 'Diagonal' },
    { value: 'inverse_diagonal', name: 'Inverse Diagonal' },
    { value: 'radial', name: 'Radial' },
];

export const logos = [
    { src: 'https://i.postimg.cc/Dzm7s7Nn/link.png', name: 'Link' },
    { src: 'https://i.postimg.cc/nzDZR0ZW/calendar.png', name: 'Google Calendar' },
    { src: 'https://i.postimg.cc/DzDnPtVs/calendar-2.png', name: 'Outlook Calendar' },
    { src: 'https://i.postimg.cc/L6RRDtWy/phone.png', name: 'Phone' },
    { src: 'https://i.postimg.cc/rsGTcsDC/placeholder.png', name: 'Placeholder' },
    { src: 'https://i.postimg.cc/0yV8bzcV/sms.png', name: 'SMS' },
    { src: 'https://i.postimg.cc/MHJwhVpp/vcard.png', name: 'Vcard' },
    { src: 'https://i.postimg.cc/wxDgDfwy/wifi.png', name: 'WiFi' },
    { src: 'https://i.postimg.cc/Hs2mhJDT/bitcoin.png', name: 'BitCoin' },
];

export const patternStyle = [
    { value: 'square', image: 'img/pattern-square.png' },
    { value: 'dot', image: 'img/pattern-dot.png' },
    { value: 'round', image: 'img/pattern-round.png' },
];

export const eyeStyle = [
    { value: 'square', image: 'img/eye-square.png' },
    { value: 'circle', image: 'img/eye-circle.png' },
];
