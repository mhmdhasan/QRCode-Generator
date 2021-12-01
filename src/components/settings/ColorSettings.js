import React from 'react';

function ColorSettings({ tabId, visibility }) {
    return (
        <div className={`tab-pane fade ${visibility}`} id={tabId} role='tabpanel' aria-labelledby={`${tabId}-tab`}>
            <form>
                <ul className='list-inline mb-0'>
                    <li className='list-inline-item mb-2 me-3'>
                        <label className='form-label mb-1' htmlFor='optColorBg'>
                            Background
                        </label>
                        <p className='form-text'>Choose the QRcode background</p>
                        <input className='form-control' id='optColorBg' type='color' defaultValue='#ffffff' />
                    </li>
                    <li className='list-inline-item mb-2 me-3'>
                        <label className='form-label mb-1' htmlFor='optColorFg'>
                            Foreground
                        </label>
                        <p className='form-text'>Choose the QRcode foreground</p>
                        <input className='form-control' id='optColorFg' type='color' defaultValue='#000000' />
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default ColorSettings;
