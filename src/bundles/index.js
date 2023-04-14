import {composeBundles, createCacheBundle} from 'redux-bundler';

import cache from '../utils/cache';
import extraArgs from './extra-args';
import routes from './routes';
import users from './users';

export default composeBundles(
    createCacheBundle(cache.set),
    extraArgs,
    routes,
    users
);
