import React, { useState } from 'react';
import { types } from '../utils/constants';
import { useAppContext } from '../context/app_context';

function Nav() {
    const { handleCodeType } = useAppContext();
    const [navItemIndex, setNavItemIndex] = useState(0);

    return (
        <>
            <nav className='options-nav mb-0'>
                <ul className='list-inline options-nav-list px-lg-4'>
                    {types.map((type, index) => {
                        return (
                            <li className='list-inline-item mx-2' key={index}>
                                <button
                                    className={`nav-btn border-0 ${index === navItemIndex ? 'active' : ''}`}
                                    type='button'
                                    title={type.text}
                                    onClick={(e) => {
                                        setNavItemIndex(index);
                                        handleCodeType(e);
                                    }}
                                >
                                    {type.icon}
                                    <p className='mb-0 text-capitalize'>{type.text}</p>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default Nav;
