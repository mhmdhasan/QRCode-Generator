import React, { useContext, useReducer, useEffect } from 'react';
import { reducer } from '../reducer/app_reducer';
import Axios from 'axios'

// Reducer Functionalitiy
export const initialState = {
    form_type: 'link',
    preview_loader: false,
    form_fields: {
        url: 'https://ionichub.co',
    },
    qrcode_image: ''
};

// Create the context
const AppContext = React.createContext();

// Working on the provider
export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleCodeType(e) {
        dispatch({ type: 'UPDATE_FORM_FIELDS', payload: e.currentTarget.title });
        codeRequest();
    }

    function updateState(e) {
        let name = e.target.name;
        let value = e.target.value;
        dispatch({ type: 'UPDATE_STATE', payload: { name, value } });
        codeRequest();
    }



    async function codeRequest() {
        dispatch({ type: 'SHOW_LOADER' });
        try {
            const response = await Axios.post('https://ionichub.co/api/qr-code');
            const image = await response.data;
            dispatch({type: 'GET_CODE_IMAGE', payload: image})
            document.getElementById('imgPreview').innerHTML = response.data
            dispatch({ type: 'HIDE_LOADER' });
        } catch (err) {
            dispatch({ type: 'HIDE_LOADER' });
            console.log(err)
        }
    }

    function stringToHTML(str){
      let parser = new DOMParser();
    	let doc = parser.parseFromString(str, 'text/html');
    	return doc.body.querySelector('svg');
    }

    useEffect(() => {
        codeRequest();
    }, []);

    return <AppContext.Provider value={{ ...state, handleCodeType, updateState }}>{children}</AppContext.Provider>;
}

export function useAppContext() {
    return useContext(AppContext);
}
