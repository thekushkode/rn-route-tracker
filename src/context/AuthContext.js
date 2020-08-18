import createDataContext from './createDataContext';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return ({ email, password }) => {
        //make api request to signup w/ email & password

        //if signup, modify state & say we are authenticated

        // if failed signup, error msg needed, somewhere..
    }
}

const signin = (dispatch) => {
    return ({ email, password }) => {
        //make api request to signup w/ email & password

        //if signup, modify state & say we are authenticated

        // if failed signup, error msg needed, somewhere..
    }
}

const signout = (dispatch) => {
    return () => {
        // somehow signout
    }
}



export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { isSignedIn: false }
)