import React, { useContext, useReducer, useEffect } from 'react';
import { reducer } from '../reducer/app_reducer';
import Axios from 'axios';

// Initial App State
export const initialState = {
    form_type: 'link',
    preview_loader: false,
    preview_error: false,
    gradient: {
        use_gradient: false,
        gradient_direction: 'diagonal',
        gradient_end_color: null,
    },
    colors: {
        color: '',
        background: '',
        eye_inner_color: '',
        eye_outer_color: '',
    },
    dimensions: {
        size: 400,
        error_correction: 'H',
    },
    pattern: 'square',
    eye_style: 'square',
    eye_number: 0,
    logo: null,
    form_fields: {
        url: 'https://ionichub.co',
    },
    qrcode_image: '',
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

    function updateGradientState(e) {
        let name = e.target.name;
        let value = e.target.value;
        dispatch({ type: 'UPDATE_GRADIENT_STATE', payload: { name, value } });
        codeRequest();
    }

    function updateDimensionsState(e) {
        let name = e.target.name;
        let value = e.target.value;
        dispatch({ type: 'UPDATE_DIMESNIONS_STATE', payload: { name, value } });
        codeRequest();
    }

    function updatePatternState(e) {
        const temppattern = e.currentTarget.previousElementSibling.value;
        dispatch({ type: 'UPDATE_PATTERN_STATE', payload: temppattern });
        codeRequest();
    }

    function updateEyeStyleState(e) {
        const tempStyle = e.currentTarget.previousElementSibling.value;
        dispatch({ type: 'UPDATE_EYESTYLE_STATE', payload: tempStyle });
        codeRequest();
    }

    function updateEyePosition(e) {
        dispatch({ type: 'UPDATE_EYE_POSITION_STATE', payload: e.target.value });
        codeRequest();
    }

    function updateLogo(e) {
        const tempLogo = e.currentTarget.previousElementSibling.value;

        if (tempLogo === 'no_logo') {
            dispatch({ type: 'REMOVE_LOGO_STATE' });
        } else {
            dispatch({ type: 'UPDATE_LOGO_STATE', payload: tempLogo });
        }
        codeRequest();
    }

    async function codeRequest() {
        dispatch({ type: 'SHOW_LOADER' });
        try {
            const response = await Axios.post('https://ionichub.co/api/qr-code');
            const image = await response.data;
            dispatch({ type: 'GET_CODE_IMAGE', payload: image });
            document.getElementById('imgPreview').innerHTML = response.data;
            dispatch({ type: 'HIDE_LOADER' });
        } catch (err) {
            dispatch({ type: 'SHOW_ERROR' });
            console.log(err);
        }
    }

    function validation() {
        var forms = document.querySelectorAll('.needs-validation');
        Array.prototype.slice.call(forms).forEach(function (form) {
            form.addEventListener(
                'input',
                function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                },
                false
            );
        });
    }

    useEffect(() => {
        codeRequest();
    }, []);

    useEffect(() => {
        validation();
    }, [state]);

    return (
        <AppContext.Provider
            value={{
                ...state,
                handleCodeType,
                updateState,
                codeRequest,
                updateGradientState,
                updateDimensionsState,
                updateLogo,
                updatePatternState,
                updateEyeStyleState,
                updateEyePosition,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
