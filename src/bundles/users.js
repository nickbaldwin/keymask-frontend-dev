import { createSelector } from 'redux-bundler';

export default {
    name: 'users',
    getReducer: () => {
        const initialData = {
            rawData: null,
            listOfEmails: null,
            listOfUsernames: null,
            mapByEmail: null,
            mapByUsername: null,
            loading: false,
            sending: false,
            lastSendFailed: false,
            lastFetchFailed: false,
            lastSendAt: null,
            lastFetchAt: null,
            unsuccessfulTries: 0
        };

        return (state = initialData, { type, payload }) => {

            if (type === 'LIST_USER_START') {
                return Object.assign({}, state, {
                    loading: true,
                });
            }
            if (type === 'LIST_USER_SUCCESS') {
                const listOfEmails = [];
                const listOfUsernames = [];
                const mapByEmail = {};
                const mapByUsername = {};
                if (payload && payload.length) {
                    payload.forEach(item => {
                        listOfEmails.push(item.email);
                        listOfUsernames.push(item.username);
                        mapByEmail[item.email] = item;
                        mapByUsername[item.username] = item;
                    });
                }
                return Object.assign({}, state, {
                    loading: false,
                    rawData: payload,
                    listOfEmails,
                    listOfUsernames,
                    mapByEmail,
                    mapByUsername,
                    lastFetchFailed: false,
                    lastFetchAt: Date.now()
                });
            }
            if (type === 'LIST_USER_FAILURE') {
                return Object.assign({}, state, {
                    loading: false,
                    lastFetchFailed: true,
                    lastFetchAt: Date.now()
                });
            }

            return state;
        };
    },
    // note apis passed in via extra-args bundle
    // todo - structure vars
    doListUsers: () => ({ dispatch, listUsers }) => {
        dispatch({ type: 'LIST_USER_START' });
        listUsers().then((payload) => {
            dispatch({ type: 'LIST_USER_SUCCESS', payload });
        }).catch((err) => {
            console.log(err);
            dispatch({ type: 'LIST_USER_FAILURE' });
        });
    },

    // { username: 'testName', password: 'testPassword', email: 'testEmail', publicKey: "testKey", randomUserKey: "testRandomKey" }
    doAddUser: (userData) => ({ dispatch, addUser }) => {
        dispatch({ type: 'ADD_USER_START' });


        console.log('userData', userData);


        addUser(userData)
            .then(() => {
                return userData;
            })
            .then((data) => {
                dispatch({ type: 'ADD_USER_SUCCESS', payload: data });
                // update our list of users
                // eslint-disable-next-line no-undef
                store.doListUsers();

            })
            .catch((err) => {
                console.log(JSON.stringify(err));
                dispatch({ type: 'ADD_USER_FAILURE' });
            });
    },



    // raw data
    selectUsersState: (state) => state.users,
    selectUsersRawData: (state) => state.users.rawData,

    // useful data
    selectListOfEmails: (state) => state.users.listOfEmails,
    selectUsersListOfUsernames: (state) => state.users.listOfUsernames,
    selectUsersMapByEmail: (state) => state.users.mapByEmail,
    selectUsersMapByUsername: (state) => state.users.mapByUsername,

    // metadata
    selectUsersLoading: (state) => state.users.loading,
    selectUsersSending: (state) => state.users.sending,
    selectUsersLastFetchFailed: (state) => state.users.lastFetchFailed,
    selectUsersLastSendFailed: (state) => state.users.lastSendFailed,
    selectUsersLastFetchAt: (state) => state.users.lastFetchAt,
    selectUsersLastSendAt: (state) => state.users.lastSendAt,

    // refresh list of users every 60s (or upto 90s?)
    reactShouldFetchUsers: createSelector('selectAppTime', 'selectUsersLastFetchAt', 'selectUsersLoading', 'selectUsersRawData', (appTime, usersLastFetchAt, usersLoading, usersRawData) => {
        let isFresh = !!usersLastFetchAt && (appTime < (usersLastFetchAt + 60000)); //60s for demo
        if (usersLoading || (usersRawData && isFresh)) {
            return false;
        }
        return { actionCreator: 'doListUsers' };
    })
};
