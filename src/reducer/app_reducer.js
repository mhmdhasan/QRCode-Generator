export function reducer(state, action) {
    if (action.type === 'UPDATE_FORM_FIELDS') {
        switch (action.payload) {
            case 'link':
                return {
                    ...state,
                    form_type: 'link',
                    form_fields: {
                        url: '',
                    },
                };
            case 'text':
                return {
                    ...state,
                    form_type: 'text',
                    form_fields: {
                        text: '',
                    },
                };
            case 'email':
                return {
                    ...state,
                    form_type: 'email',
                    form_fields: {
                        email_address: '',
                        email_subject: '',
                        email_text: '',
                    },
                };
            case 'location':
                return {
                    ...state,
                    form_type: 'location',
                    form_fields: {
                        map_latitude: 0,
                        map_longitude: 0,
                    },
                };
            case 'phone':
                return {
                    ...state,
                    form_type: 'phone',
                    form_fields: {
                        country_code: '',
                        phone_number: '',
                    },
                };
            case 'sms':
                return {
                    ...state,
                    form_type: 'sms',
                    form_fields: {
                        country_code: '',
                        phone_number: '',
                        text_message: '',
                    },
                };
            case 'wifi':
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
            case 'vcard':
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
                        vcard_company: '',
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

            case 'event':
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
            case 'bitcoin':
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
            default:
                return { ...state };
        }
    }

    if (action.type === 'UPDATE_STATE') {
        const { name, value } = action.payload;
        return { ...state, form_fields: { ...state.form_fields, [name]: value } };
    }

    throw new Error(`There's no matching ${action.type} - action type`);
}
