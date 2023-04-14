import { createRouteBundle } from 'redux-bundler';
import Home from '../pages/Home';
import UserAccount from '../pages/UserAccount';
import Share from '../pages/Share';

// todo - useful (react router dealing with routing)? or remove?
export default createRouteBundle({
    '/': Home,
    '/about': UserAccount,
    '/share': Share
});
