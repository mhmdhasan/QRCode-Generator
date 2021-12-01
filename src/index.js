import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.default.scss';
import App from './App';
import { AppProvider } from './context/app_context';
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
