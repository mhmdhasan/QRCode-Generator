import React, { useContext, useReducer } from 'react';
import { reducer } from '../reducer/app_reducer';

// Reducer Functionalitiy
export const initialState = {
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
        dispatch({ type: 'UPDATE_FORM_FIELDS', payload: e.target.title });
    }

    function updateState(e) {
        let name = e.target.name;
        let value = e.target.value;
        dispatch({ type: 'UPDATE_STATE', payload: { name, value } });
    }

    return <AppContext.Provider value={{ ...state, handleCodeType, updateState }}>{children}</AppContext.Provider>;
}

export function useAppContext() {
    return useContext(AppContext);
}
