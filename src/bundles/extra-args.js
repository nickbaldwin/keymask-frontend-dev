import {baseApiFetch} from '../api/fetch';

export default {
    name: 'extra-args',
    // the store is passed in here
    // so can pass in additional info e.g. keys into requests...

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getExtraArgs: (store) => {
        return {
            listUsers: () => {
                // to get something
                return baseApiFetch({path: 'listUsers'});
            },
            addUser: (data) => {
                return baseApiFetch({path: 'addUser', data});
            }
        };
    }
};
