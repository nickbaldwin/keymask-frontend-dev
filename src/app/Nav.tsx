import React from 'react';
import {connect} from 'redux-bundler-react';
import {NavLink} from 'react-router-dom';
import SignOut from 'components/SignOut';

const links = [
    { path: '/', text: 'Home' },
    { path: 'account', text: 'Account' },
    { path: 'share', text: 'Share' },
    { path: 'retrieve', text: 'Retrieve' },
];


const Nav = () => {
    return (
        <nav className="navbar">
            {links.map((link, _i) => {
                return (
                    <span key={'el' + _i}>
                        <span>
                            <NavLink key={'item' + _i} to={link.path} >
                                {link.text}
                            </NavLink>
                        </span>
                        <span>
                            {_i < links.length - 1 && ' | '}
                        </span>
                    </span>
                );
            })}
            <SignOut />
        </nav>
    );
};


export default connect(
    Nav
);