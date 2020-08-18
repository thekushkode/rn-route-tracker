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
        default:
            return state;
    }
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
    { signin, signout, signup },
    { token: null, errorMessage: '' }
)