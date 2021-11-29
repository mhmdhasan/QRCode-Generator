import React, { useContext, useReducer } from 'react';
import { reducer } from '../reducer/app_reducer';

// Reducer Functionalitiy
const initialState = {
    form_type: 'link',
    form_fields: {
        url: '',
    },
};

// Create the context
const AppContext = React.createContext();

// Working on the provider
export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleCodeType(e) {
        if (e.currentTarget.title === 'link') {
            dispatch({ type: 'SET_LINK_FORM' });
        }
        if (e.currentTarget.title === 'text') {
            dispatch({ type: 'SET_TEXT_FORM' });
        }
        if (e.currentTarget.title === 'email') {
            dispatch({ type: 'SET_EMAIL_FORM' });
        }
        if (e.currentTarget.title === 'phone') {
            dispatch({ type: 'SET_PHONE_FORM' });
        }
        if (e.currentTarget.title === 'location') {
            dispatch({ type: 'SET_LOCATION_FORM' });
        }
        if (e.currentTarget.title === 'vcard') {
            dispatch({ type: 'SET_VCARD_FORM' });
        }
        if (e.currentTarget.title === 'sms') {
            dispatch({ type: 'SET_SMS_FORM' });
        }
        if (e.currentTarget.title === 'wifi') {
            dispatch({ type: 'SET_WIFI_FORM' });
        }
        if (e.currentTarget.title === 'event') {
            dispatch({ type: 'SET_EVENT_FORM' });
        }
        if (e.currentTarget.title === 'bitcoin') {
            dispatch({ type: 'SET_BITCOIN_FORM' });
        }
    }

    return <AppContext.Provider value={{ ...state, handleCodeType }}>{children}</AppContext.Provider>;
}

export function useAppContext() {
    return useContext(AppContext);
}
