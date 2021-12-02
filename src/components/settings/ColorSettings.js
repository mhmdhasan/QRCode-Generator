import React, { useState } from 'react';
import { useAppContext } from '../../context/app_context';
import { gradientDirection } from '../../utils/constants';

function ColorSettings({ tabId, visibility }) {
    const { gradient, colors, codeRequest, updateState, updateGradientState } = useAppContext();
    const [cColor, setcColor] = useState(['0', '0', '0']);
    const [cBgColor, setcBgColor] = useState(['255', '255', '255']);
    const [gEndColor, setgEndColor] = useState(['255', '255', '255']);
    const [eyeInnerColor, setEyeInnerColor] = useState(['255', '255', '255']);
    const [eyeOuterColor, setEyeOuterColor] = useState(['255', '255', '255']);
    const [checked, setChecked] = useState(false);

    function hexToRgb(e) {
        let tempColor = e.target.value.substring(1).match(/.{1,2}/g);
        return tempColor;
    }

    function handleToggleChange(e) {
        setChecked(!checked);
        updateState(e);
    }

    colors.color = cColor;
    colors.background = cBgColor;
    colors.eye_inner_color = eyeInnerColor;
    colors.eye_outer_color = eyeOuterColor;
    gradient.use_gradient = checked;
    gradient.gradient_end_color = gEndColor;

    return (
        <div className={`tab-pane fade ${visibility}`} id={tabId} role='tabpanel' aria-labelledby={`${tabId}-tab`}>
            <form>
                <ul className='list-inline'>
                    <li className='list-inline-item my-2 me-3'>
                        <label className='form-label mb-1' htmlFor='optColorBg'>
                            Background
                        </label>
                        <p className='form-text'>Choose the QRcode background</p>
                        <input
                            className='form-control'
                            id='optColorBg'
                            type='color'
                            defaultValue='#ffffff'
                            onChange={(e) => {
                                setcColor(hexToRgb(e));
                                codeRequest();
                            }}
                        />
                    </li>
                    <li className='list-inline-item my-2 me-3'>
                        <label className='form-label mb-1' htmlFor='optColorFg'>
                            Foreground
                        </label>
                        <p className='form-text'>Plays also as gradient start color</p>
                        <input
                            className='form-control'
                            id='optColorFg'
                            type='color'
                            defaultValue='#000000'
                            onChange={(e) => {
                                setcBgColor(hexToRgb(e));
                                codeRequest();
                            }}
                        />
                    </li>
                    <li className='list-inline-item my-2 me-3'>
                        <label className='form-label mb-1' htmlFor='innerEyeColor'>
                            Eye inner Color
                        </label>
                        <p className='form-text'>Choose eye inner color</p>
                        <input
                            className='form-control'
                            id='innerEyeColor'
                            type='color'
                            defaultValue='#000000'
                            onChange={(e) => {
                                setEyeInnerColor(hexToRgb(e));
                                codeRequest();
                            }}
                        />
                    </li>
                    <li className='list-inline-item my-2 me-3'>
                        <label className='form-label mb-1' htmlFor='outerEyeColor'>
                            Eye Outer Color
                        </label>
                        <p className='form-text'>Choose eye outer color</p>
                        <input
                            className='form-control'
                            id='outerEyeColor'
                            type='color'
                            defaultValue='#000000'
                            onChange={(e) => {
                                setEyeOuterColor(hexToRgb(e));
                                codeRequest();
                            }}
                        />
                    </li>
                </ul>

                <div className='d-flex'>
                    <div className='form-check form-switch'>
                        <input
                            className='form-check-input'
                            type='checkbox'
                            name='gradient_is_used'
                            id='useGradient'
                            checked={checked}
                            onChange={handleToggleChange}
                        />
                        <label className='form-check-label' htmlFor='useGradient'>
                            Use Gradient
                        </label>
                    </div>
                </div>

                {checked ? (
                    <ul className='list-inline mb-0 d-flex align-items-start flex-wrap mt-3'>
                        <li className='list-inline-item my-2 me-3'>
                            <label className='form-label mb-1' htmlFor='optColorBg'>
                                End Color
                            </label>
                            <p className='form-text'>Choose the QRcode gradient end color</p>
                            <input
                                className='form-control'
                                id='optColorBg'
                                type='color'
                                defaultValue='#555555'
                                onChange={(e) => {
                                    setgEndColor(hexToRgb(e));
                                    codeRequest();
                                }}
                            />
                        </li>

                        <li className='list-inline-item my-2 me-3'>
                            <label className='form-label mb-1' htmlFor='gradientDirection'>
                                Direction
                            </label>
                            <p className='form-text'>Choose gradient direction</p>
                            <select
                                name='gradient_direction'
                                id='gradientDirection'
                                className='form-select'
                                value={gradient.gradient_direction}
                                onChange={updateGradientState}
                            >
                                {gradientDirection.map((direction, index) => {
                                    return (
                                        <option value={direction.value} key={index}>
                                            {direction.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </li>
                    </ul>
                ) : null}
            </form>
        </div>
    );
}

export default ColorSettings;
