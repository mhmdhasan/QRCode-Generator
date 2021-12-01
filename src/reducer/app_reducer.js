export function reducer(state, action) {
    if (action.type === 'UPDATE_FORM_FIELDS') {
        switch (action.payload) {
            case 'link':
                return {
                    ...state,
                    form_type: 'link',
                    form_fields: {
                        url: 'https://ionichub.co',
                    },
                };
            case 'text':
                return {
                    ...state,
                    form_type: 'text',
                    form_fields: {
                        text: 'This is a placeholder text',
                    },
                };
            case 'email':
                return {
                    ...state,
                    form_type: 'email',
                    form_fields: {
                        email_address: 'ionic.hub.eg@gmail.com',
                        email_subject: 'Ask for a consultion',
                        email_text: 'This is a random email text message',
                    },
                };
            case 'location':
                return {
                    ...state,
                    form_type: 'location',
                    form_fields: {
                        map_latitude: 51.441767,
                        map_longitude: 5.470247,
                    },
                };
            case 'phone':
                return {
                    ...state,
                    form_type: 'phone',
                    form_fields: {
                        country_code: '+20',
                        phone_number: '1259654785',
                    },
                };
            case 'sms':
                return {
                    ...state,
                    form_type: 'sms',
                    form_fields: {
                        country_code: '+20',
                        phone_number: '1259654785',
                        text_message: 'This is a test sms message',
                    },
                };
            case 'wifi':
                return {
                    ...state,
                    form_type: 'wifi',
                    form_fields: {
                        network_name: 'Sample Wifi',
                        network_type: 'WEP',
                        network_password: '12345678',
                        network_visibilty: true,
                    },
                };
            case 'vcard':
                return {
                    ...state,
                    form_type: 'vcard',
                    form_fields: {
                        vcard_version: '3.0',
                        vcard_title: 'Sample title',
                        vcard_firstname: 'Jason',
                        vcard_lastname: 'Doe',
                        home_country_code: '+20',
                        vcard_phone_home: '987456321',
                        mobile_country_code: '+20',
                        vcard_phone_mobile: '987456321',
                        vcard_email: 'jason@doe.com',
                        vcard_website: 'https://company.com',
                        vcard_company: 'Sample company',
                        vcard_job: 'Sample job title',
                        office_country_code: '+20',
                        vcard_phone_office: '987456321',
                        fax_country_code: '+20',
                        vcard_phone_fax: '987456321',
                        vcard_address: 'Sample address',
                        vcard_postcode: '31775',
                        vcard_city: 'Basyun',
                        vcard_state: 'Gharbeya',
                        vcard_country: 'Egypt',
                    },
                };

            case 'event':
                return {
                    ...state,
                    form_type: 'event',
                    form_fields: {
                        event_title: 'Something cool to do',
                        event_location: 'Egypt',
                        event_start_time: '',
                        event_end_time: '',
                        event_reminder: '-PT12H',
                        event_link: 'http://placeholder.com',
                        event_notes: 'Some important notes about the event',
                    },
                };
            case 'bitcoin':
                return {
                    ...state,
                    form_type: 'bitcoin',
                    form_fields: {
                        btc_account: 'Sample account',
                        btc_amount: '0.00245',
                        item_name: 'Item name sample',
                        message: 'A placeholder message',
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

    if (action.type === 'GET_CODE_IMAGE') {
      return {...state, qrcode_image: action.payload}
    }

    if (action.type === 'SHOW_LOADER') {
        return { ...state, preview_loader: true };
    }

    if (action.type === 'HIDE_LOADER') {
        return { ...state, preview_loader: false };
    }

    throw new Error(`There's no matching ${action.type} - action type`);
}
