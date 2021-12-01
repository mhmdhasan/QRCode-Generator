import React from 'react';
import { settingsNav } from '../utils/constants';
import ColorSettings from './settings/ColorSettings';
import DimensionsSettings from './settings/DimensionsSettings';
import FrameSettings from './settings/FrameSettings';
import LogoSettings from './settings/LogoSettings';

function Settings() {
    return (
        <>
            <ul
                className='nav nav-pills flex-column justify-content-center flex-sm-row mt-5 px-lg-4'
                id='myTab'
                role='tablist'
            >
                {settingsNav.map((item, index) => {
                    return (
                        <li className='nav-item flex-sm-fill mx-sm-2' role='presentation' key={index}>
                            <button
                                className={`nav-link w-100 ${index === 0 ? 'active' : ''}`}
                                id={`${item.id}-tab`}
                                data-bs-toggle='tab'
                                data-bs-target={`#${item.id}`}
                                type='button'
                                role='tab'
                                aria-controls={item.id}
                                aria-selected='true'
                            >
                                {item.icon}
                                <p className='mb-0'>{item.title}</p>
                            </button>
                        </li>
                    );
                })}
            </ul>

            <div
                className='card tab-content mb-5 p-4 p-lg-5 rounded-lg bdr-top-start-0 bdr-top-end-0 '
                id='settingsTabContent'
            >
                <ColorSettings tabId={settingsNav[0].id} visibility='show active' />
                <LogoSettings tabId={settingsNav[1].id} visibility='' />
                <FrameSettings tabId={settingsNav[2].id} visibility='' />
                <DimensionsSettings tabId={settingsNav[3].id} visibility='' />
            </div>
        </>
    );
}

export default Settings;
