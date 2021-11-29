export function reducer(state, action) {
    if (action.type === 'SET_LINK_FORM') {
        return {
            ...state,
            form_type: 'link',
            form_fields: {
                url: '',
            },
        };
    }
    if (action.type === 'SET_TEXT_FORM') {
        return {
            ...state,
            form_type: 'text',
            form_fields: {
                text: '',
            },
        };
    }
    if (action.type === 'SET_EMAIL_FORM') {
        return {
            ...state,
            form_type: 'email',
            form_fields: {
                email_address: '',
                email_subject: '',
                email_text: '',
            },
        };
    }
    if (action.type === 'SET_LOCATION_FORM') {
        return {
            ...state,
            form_type: 'location',
            form_fields: {
                map_latitude: 'testing',
                map_longitude: 'testing',
            },
        };
    }
    if (action.type === 'SET_PHONE_FORM') {
        return {
            ...state,
            form_type: 'phone',
            form_fields: {
                country_code: '',
                phone_number: '',
            },
        };
    }
    if (action.type === 'SET_SMS_FORM') {
        return {
            ...state,
            form_type: 'sms',
            form_fields: {
                country_code: '',
                phone_number: '',
                text_message: '',
            },
        };
    }
    if (action.type === 'SET_WIFI_FORM') {
        return {
            ...state,
            form_type: 'wifi',
            form_fields: {
                network_name: '',
                network_type: '',
                network_password: '',
                network_visibilty: false,
            },
        };
    }
    if (action.type === 'SET_VCARD_FORM') {
        return {
            ...state,
            form_type: 'vcard',
            form_fields: {
                vcard_version: '',
                vcard_title: '',
                vcard_firstname: '',
                vcard_lastname: '',
                home_country_code: '',
                vcard_phone_home: '',
                mobile_country_code: '',
                vcard_phone_mobile: '',
                vcard_email: '',
                vcard_website: '',
                vcard_job: '',
                office_country_code: '',
                vcard_phone_office: '',
                fax_country_code: '',
                vcard_phone_fax: '',
                vcard_address: '',
                vcard_postcode: '',
                vcard_city: '',
                vcard_state: '',
                vcard_country: '',
            },
        };
    }
    if (action.type === 'SET_EVENT_FORM') {
        return {
            ...state,
            form_type: 'event',
            form_fields: {
                event_title: '',
                event_location: '',
                event_start_time: '',
                event_end_time: '',
                event_reminder: '',
                event_link: '',
                event_notes: '',
            },
        };
    }
    if (action.type === 'SET_BITCOIN_FORM') {
        return {
            ...state,
            form_type: 'bitcoin',
            form_fields: {
                btc_account: '',
                btc_amount: '',
                item_name: '',
                message: '',
            },
        };
    }
    if (action.type === 'UPDATE_STATE') {
        const { name, value } = action.payload;
        return { ...state, form_fields: { ...state.form_fields, [name]: value } };
    }
    if (action.type === 'UPDATE_COORDINATES') {
        return { ...state, form_fields: { ...state.form_fields, map_latitude: action.payload.lat } };
    }

    throw new Error(`There's no matching ${action.type} - action type`);
}
