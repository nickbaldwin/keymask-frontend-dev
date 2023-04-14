import { connect } from 'redux-bundler-react';
import React from 'react';


// todo - no selectors yet defined
const AddUser = ({ doAddUser }) => {

    const handleSubmit = () => {
        doAddUser({
            username: 'unique2',
            password: 'unique2',
            email: 'unique2',
            publicKey: '-----BEGIN PUBLIC KEY-----key -----END PUBLIC KEY-----'
        });
    };

    return (
        <span>
            <button className='submit-button inline-button' onClick={handleSubmit}>Add user</button>
        </span>
    );
};



export default connect(
    'doAddUser',
    AddUser
);
