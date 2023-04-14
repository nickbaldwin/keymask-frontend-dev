import React from 'react';
import {connect} from 'redux-bundler-react';
import AddUser from 'components/AddUser';

const Home: React.FC = () => (
    <div>
        <p>Home Page</p>
        <AddUser />
    </div>
);

export default connect(Home);
