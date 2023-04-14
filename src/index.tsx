import * as ReactDOMClient from 'react-dom/client';
import getStore from './bundles';
import App from './app/App';
import cache from './utils/cache';

cache.getAll()
    .then((initialData) => {
        if (initialData) {
            console.log('starting with locally cache data:', initialData);
        }
        const root = ReactDOMClient.createRoot(document.getElementById('root'));
        root.render(App(getStore(initialData)));
    })
    .catch((err) => {
        console.log('error getting cached data', err);
    });

