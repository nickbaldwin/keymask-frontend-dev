import React from 'react';
import {connect} from 'redux-bundler-react';
import SecretsList from 'components/SecretsList';

const Home: React.FC = () => (
    <div>
        <p>Home Page</p>
        This is a simple demo of fetching/posting data from a simple static api server :
        <ul>
            <li>GET secrets</li>
            <li>POST a secret - get a response, refetch secrets</li>
        </ul>
        <br />


        <SecretsList />

    </div>
);

export default connect(Home);
