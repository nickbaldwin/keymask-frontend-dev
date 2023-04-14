
export default {
    name: 'authUser',
    getReducer: () => {
        const initialData = {
            rawData: null,
            loading: false,
            sending: false,
            lastCreateFailed: false,
            lastFetchFailed: false,
            lastSendFailed: false,
            lastSendAt: null,
            lastFetchAt: null
        };

        return (state = initialData, { type, payload }) => {
            if (type === 'AUTH_USER_START') {
                //
            }
            if (type === 'AUTH_USER_SUCCESS') {
                //
            }
            if (type === 'AUTH_USER_FAILURE') {
                //
            }

            return state;
        };
    },

    // todo
    doAuthUser: (user) => ({ dispatch, authUser }) => {
        dispatch({ type: 'AUTH_USER_START' });
        authUser(user)
            .then((data) => {
                dispatch({ type: 'AUTH_USER_SUCCESS', payload: data  });
            })
            .catch((err) => {
                console.log(JSON.stringify(err));
                dispatch({ type: 'AUTH_USER_FAILURE' });
            });
    },

    selectAuthUserRawData: (state) => state.authUser?.rawData
};