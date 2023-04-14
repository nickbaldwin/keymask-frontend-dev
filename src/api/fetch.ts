
// todo - these will need to be updated for prod use
const tempOptions: RequestInit = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'omit',
    headers: {
        'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
};



// todo - use interface for data
// todo - test what happens with no data passed in
const getOptions = (method: string, data: object) : RequestInit => {
    return ({
        ...tempOptions,
        method: method,
        body: JSON.stringify(data)
    });
};

// todo - use interface

const calls = {

    'listUsers': {
        path: '/listUsers',
        getOptions: () : RequestInit => {
            return tempOptions;
        }
    },

    // todo
    'addUser': {
        path: '/addUser',
        getOptions: (data) : RequestInit => {
            return getOptions('POST', data);
        }
    }

};


interface CallParams {
    path: string,
    data?: object,
    id?: string
}

export const baseApiFetch = (params: CallParams) => {

    // todo - if any keys, tokens etc need to be passed in, this is where it can be done for all api calls

    if (!calls[params.path]) {
        console.log('no api endpoint');
        return null;
    }

    let url = `https://keymask-backend-demo.fly.dev/${params.path}`;
    if (params.id) {
        url += '/' + params.id;
    }

    const options = calls[params.path].getOptions(params.data);

    return fetch(url, options)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson ? await response.json() : null;

            // check for error response
            if (!response.ok) {
                console.log(response);
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
            return data;
        })
        .catch((err) => {
            throw err;
        });
};


