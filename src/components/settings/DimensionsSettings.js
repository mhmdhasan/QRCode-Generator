import React from 'react';

function DimensionsSettings({ tabId, visibility }) {
    return (
        <div className={`tab-pane fade ${visibility}`} id={tabId} role='tabpanel' aria-labelledby={`${tabId}-tab`}>
            <h4>Dimensions Settings</h4>
        </div>
    );
}

export default DimensionsSettings;
