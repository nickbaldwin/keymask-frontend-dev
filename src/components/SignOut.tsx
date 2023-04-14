import { connect } from 'redux-bundler-react';
import React from 'react';


// todo - no selectors yet defined
const SignOut = ({ authUserData, doSignOutUser }) => {

    const handleSubmit = () => {
        doSignOutUser();
    };


    if (!authUserData) {
        return;
    }
    return (
        <span>
            <button className='submit-button inline-button' onClick={handleSubmit}>Sign out</button>
        </span>
    );
};



export default connect(
    SignOut
);
