import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'sign_in':
            return { errorMessage: '', token: action.payload };
        case 'clear_error_message':
            return { ...state, errorMessage: '' };
        default:
            return state;
    }
};

const tryLocalSignIn = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'sign_in', payload: token });
        navigate('TrackList');
    } else {
        navigate('loginFlow');
    }
};

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: 'clear_error_message' })
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'sign_in', payload: response.data.token });
            navigate('TrackList')
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong during signup..' });
        }
    }
}

const signin = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signin', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'sign_in', payload: response.data.token });
            navigate('TrackList')
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong during signin..' });
        }
    }
}

const signout = (dispatch) => {
    return () => {
        // somehow signout
    }
}



export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignIn },
    { token: null, errorMessage: '' }
);