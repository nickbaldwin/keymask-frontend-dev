import React from 'react';
import {Provider} from 'redux-bundler-react';

import { AppRoutes } from './AppRoutes';

const App: React.FC = (store) => {
    console.log('production environment?: ' + process.env.PRODUCTION.toString());
    console.log('name: ' + process.env.NAME);
    console.log('version: ' + process.env.VERSION);

    return (
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    );
};

export default App;