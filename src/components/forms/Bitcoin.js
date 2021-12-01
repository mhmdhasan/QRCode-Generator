import React from 'react';
import { FaBitcoin } from 'react-icons/fa';
import { useAppContext } from '../../context/app_context';

function Bitcoin() {
    const { updateState, form_fields } = useAppContext();
    const { btc_account, btc_amount, item_name, message } = form_fields;

    return (
        <div className='card rounded-lg bdr-top-start-0 bdr-top-end-0 mb-5'>
            <div className='card-body p-4 p-lg-5'>
                <header className='d-flex align-items-center mb-4'>
                    <div className='icon me-2'>
                        <FaBitcoin size='0.9rem' />
                    </div>
                    <h5 className='mb-0'>Bitcoin</h5>
                </header>

                <form>
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
                                    value={btc_account}
                                    onChange={updateState}
                                />
                                <label htmlFor='btcAccount'>Acount</label>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='input-group flex-nowrap'>
                                <div className='form-floating flex-grow-1'>
                                    <input
                                        className='form-control'
                                        id='btcAmount'
                                        type='number'
                                        name='btc_amount'
                                        autoComplete='off'
                                        placeholder='Amount'
                                        value={btc_amount}
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
                                    value={item_name}
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
                                    value={message}
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
