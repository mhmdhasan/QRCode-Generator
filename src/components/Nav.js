import React, { useState } from 'react';
import { types } from '../utils/constants';
import { useAppContext } from '../context/app_context';

function Nav() {
    const { handleCodeType } = useAppContext();
    const [navItemIndex, setNavItemIndex] = useState(0);

    return (
        <>
            <nav className='options-nav'>
                <ul className='list-inline options-nav-list px-lg-4'>
                    {types.map((type, index) => {
                        return (
                            <li className='list-inline-item mx-2' key={index}>
                                <a
                                    className={`nav-btn ${index === navItemIndex ? 'active' : null}`}
                                    href='#!'
                                    rel='noreferrer'
                                    title={type.text}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setNavItemIndex(index);
                                        handleCodeType(e);
                                    }}
                                >
                                    {type.icon}
                                    <p className='mb-0 text-capitalize'>{type.text}</p>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default Nav;
