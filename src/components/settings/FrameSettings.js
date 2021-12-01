import React from 'react';

function FrameSettings({ tabId, visibility }) {
    return (
        <div className={`tab-pane fade ${visibility}`} id={tabId} role='tabpanel' aria-labelledby={`${tabId}-tab`}>
            <h4>Frame Settings</h4>
        </div>
    );
}

export default FrameSettings;
