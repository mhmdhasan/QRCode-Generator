import React from 'react';
import { FaBitcoin } from 'react-icons/fa';
import { useAppContext } from '../../context/app_context';

function Bitcoin() {
    const { updateState } = useAppContext();

    return (
        <div className='card pt-4 mb-5'>
            <div className='card-body'>
                <header className='d-flex align-items-center mb-4 form-header'>
                    <div className='icon me-2'>
                        <FaBitcoin size='0.9rem' />
                    </div>
                    <h5 className='mb-0'>Bitcoin</h5>
                </header>

                <form className='mb-4'>
                    <div className='row gy-3'>
                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='btcAccount'
                                    type='text'
                                    name='btc_account'
                                    autoComplete='off'
                                    placeholder='Acount'
                                    onChange={updateState}
                                />
                                <label htmlFor='btcAccount'>Acount</label>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='input-group'>
                                <div className='form-floating flex-grow-1'>
                                    <input
                                        className='form-control'
                                        id='btcAmount'
                                        type='number'
                                        name='btc_amount'
                                        autoComplete='off'
                                        placeholder='Amount'
                                        onChange={updateState}
                                    />
                                    <label htmlFor='btcAmount'>Amount</label>
                                </div>
                                <div className='input-group-text bg-gray-300'>BTC</div>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='itemName'
                                    type='text'
                                    name='item_name'
                                    autoComplete='off'
                                    placeholder='Item Name'
                                    onChange={updateState}
                                />
                                <label htmlFor='itemName'>Item Name</label>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='message'
                                    type='text'
                                    name='message'
                                    autoComplete='off'
                                    placeholder='Message'
                                    onChange={updateState}
                                />
                                <label htmlFor='message'>Message</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Bitcoin;
