import React, { useState } from 'react';
import { patternStyle, eyeStyle } from '../../utils/constants';
import { useAppContext } from '../../context/app_context';

function FrameSettings({ tabId, visibility }) {
    const { eye_number, updatePatternState, updateEyeStyleState, updateEyePosition } = useAppContext();
    const [patternIndex, setPatternIndex] = useState(0);
    const [eyeStyleIndex, setEyeStyleIndex] = useState(0);

    return (
        <div className={`tab-pane fade ${visibility}`} id={tabId} role='tabpanel' aria-labelledby={`${tabId}-tab`}>
            <form>
                <ul className='list-inline mb-0'>
                    <li className='list-inline-item me-4 mb-3'>
                        <header className='mb-2'>
                            <label className='form-label'>Pattern</label>
                        </header>
                        <div className='d-flex'>
                            {patternStyle.map((el, index) => {
                                return (
                                    <div className='m-1' key={index}>
                                        <input
                                            type='radio'
                                            className={`btn-check ${index === patternIndex ? 'active' : ''}`}
                                            name='pattern'
                                            id={index}
                                            autoComplete='off'
                                            value={el.value}
                                        />
                                        <label
                                            className='btn btn-outline-secondary border-0 p-2'
                                            htmlFor={index}
                                            onClick={(e) => {
                                                updatePatternState(e);
                                                setPatternIndex(index);
                                            }}
                                        >
                                            <img
                                                src={el.image}
                                                alt={el.value}
                                                height='60'
                                                width='60'
                                                className='img-fluid'
                                            />
                                        </label>
                                    </div>
                                );
                            })}
                        </div>
                    </li>

                    <li className='list-inline-item mb-3'>
                        <header className='mb-2'>
                            <label className='form-label'>Eye Style</label>
                        </header>
                        <div className='d-flex'>
                            {eyeStyle.map((el, index) => {
                                return (
                                    <div className='m-1' key={index}>
                                        <input
                                            type='radio'
                                            className={`btn-check ${index === eyeStyleIndex ? 'active' : ''}`}
                                            name='eye_style'
                                            id={index}
                                            autoComplete='off'
                                            value={el.value}
                                        />
                                        <label
                                            className='btn btn-outline-secondary border-0 p-2'
                                            htmlFor={index}
                                            onClick={(e) => {
                                                updateEyeStyleState(e);
                                                setEyeStyleIndex(index);
                                            }}
                                        >
                                            <img
                                                src={el.image}
                                                alt={el.value}
                                                height='60'
                                                width='60'
                                                className='img-fluid'
                                            />
                                        </label>
                                    </div>
                                );
                            })}
                        </div>
                    </li>
                </ul>

                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='form-floating'>
                            <select
                                className='form-select'
                                name='eye_number'
                                value={eye_number}
                                onChange={updateEyePosition}
                            >
                                <option value='0' key='1'>
                                    Top Left
                                </option>
                                <option value='1' key='2'>
                                    Top Right
                                </option>
                                <option value='2' key='3'>
                                    Bottom Left
                                </option>
                            </select>
                            <label htmlFor='eyePosition'>Eye Position</label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FrameSettings;
