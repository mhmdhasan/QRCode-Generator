import React from 'react';
import { codeSize, precision } from '../../utils/constants';
import { useAppContext } from '../../context/app_context';

function DimensionsSettings({ tabId, visibility }) {
    const { dimensions, updateDimensionsState } = useAppContext();
    const { size, error_correction } = dimensions;

    return (
        <div className={`tab-pane fade ${visibility}`} id={tabId} role='tabpanel' aria-labelledby={`${tabId}-tab`}>
            <form>
                <div className='row gy-3'>
                    <div className='col-lg-6'>
                        <div className='form-floating'>
                            <select
                                className='form-select'
                                id='size'
                                name='size'
                                value={size}
                                onChange={updateDimensionsState}
                            >
                                {codeSize.map((size, index) => {
                                    return (
                                        <option value={size} key={index}>
                                            {size}
                                        </option>
                                    );
                                })}
                            </select>
                            <label htmlFor='size'>Size</label>
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className='form-floating'>
                            <select
                                className='form-select'
                                id='precision'
                                value={error_correction}
                                name='error_correction'
                                onChange={updateDimensionsState}
                            >
                                {precision.map((size, index) => {
                                    return (
                                        <option value={size.value} key={index}>
                                            {size.value} - {size.name}
                                        </option>
                                    );
                                })}
                            </select>
                            <label htmlFor='precision'>Precision</label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default DimensionsSettings;
