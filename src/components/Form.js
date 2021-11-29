import React from 'react';
import { useAppContext } from '../context/app_context';
import { Link, Text, Email, Bitcoin, Location, Phone, Sms, Vcard, Wifi, Event } from './forms';

function Form() {
    const { form_type } = useAppContext();

    if (form_type === 'link') return <Link />;
    if (form_type === 'text') return <Text />;
    if (form_type === 'email') return <Email />;
    if (form_type === 'bitcoin') return <Bitcoin />;
    if (form_type === 'wifi') return <Wifi />;
    if (form_type === 'location') return <Location />;
    if (form_type === 'sms') return <Sms />;
    if (form_type === 'phone') return <Phone />;
    if (form_type === 'vcard') return <Vcard />;
    if (form_type === 'event') return <Event />;

    return <>No forms</>;
}

export default Form;
