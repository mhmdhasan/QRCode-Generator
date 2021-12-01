import React from 'react';

function LogoSettings({ tabId, visibility }) {
    return (
        <div className={`tab-pane fade ${visibility}`} id={tabId} role='tabpanel' aria-labelledby={`${tabId}-tab`}>
            <h4>Logo Settings</h4>
        </div>
    );
}

export default LogoSettings;
