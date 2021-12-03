import React from 'react';
import { steps } from '../utils/constants';

function HowItWorks() {
    return (
        <section className='pb-5'>
            <div className='container'>
                <div className='rounded-lg p-4 p-lg-5 bg-dark text-white position-relative shadow'>
                    <div className='row text-center gy-4'>
                        {steps.map((step, index) => {
                            return (
                                <div className='col-lg-3 col-md-6' key={index}>
                                    <div className='d-flex align-items-end justify-content-center'>
                                        <div className='no me-2 lh-1 text-shadow'>{index + 1}.</div>
                                        <h5 className='mb-2 text-gray-400'>{step}</h5>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
