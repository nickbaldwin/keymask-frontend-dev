import { connect } from 'redux-bundler-react';
import React from 'react';


// todo - no selectors yet defined
const AddUser = ({ doAddUser }) => {

    const handleSubmit = () => {
        doAddUser({
            username: 'unique4',
            password: 'unique4',
            email: 'unique4',
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
