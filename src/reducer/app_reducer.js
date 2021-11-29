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
                send_to: '',
                subject: '',
                text: '',
            },
        };
    }
    if (action.type === 'SET_LOCATION_FORM') {
        return {
            ...state,
            form_type: 'location',
            form_fields: {
                url: '',
            },
        };
    }
    if (action.type === 'SET_PHONE_FORM') {
        return {
            ...state,
            form_type: 'phone',
            form_fields: {
                url: '',
            },
        };
    }
    if (action.type === 'SET_SMS_FORM') {
        return {
            ...state,
            form_type: 'sms',
            form_fields: {
                url: '',
            },
        };
    }
    if (action.type === 'SET_WIFI_FORM') {
        return {
            ...state,
            form_type: 'wifi',
            form_fields: {
                url: '',
            },
        };
    }
    if (action.type === 'SET_VCARD_FORM') {
        return {
            ...state,
            form_type: 'vcard',
            form_fields: {
                url: '',
            },
        };
    }
    if (action.type === 'SET_EVENT_FORM') {
        return {
            ...state,
            form_type: 'event',
            form_fields: {
                url: '',
            },
        };
    }
    if (action.type === 'SET_BITCOIN_FORM') {
        return {
            ...state,
            form_type: 'bitcoin',
            form_fields: {
                url: '',
            },
        };
    }

    throw new Error(`There's no matching ${action.type} - action type`);
}
