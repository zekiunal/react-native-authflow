import createDataContext from './createDataContext';
import axios from "../api/api";
import AuthFlowConfig from "../helpers/AuthFlowConfig";
import AsyncStorage from '@react-native-community/async-storage';
import {navigate} from "react-native-easy-navigator";

let api = false;

const initApi = () => {
    console.log("initApi");
    api = axios(AuthFlowConfig.getApiConfig());
};

const authReducer = (state, action) => {
    console.log("authReducer");

    switch (action.type) {
        case 'error':
            return {...state, error: action.payload, token: false};
        case 'signin':
            return {...state, token: action.payload, error: false};
        case 'clear':
            return {...state, error: false};
        default:
            return state;
    }
};

const autoSignIn = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({type: 'signin', payload: token});
        navigate('Home');
    } else {
        navigate('SignUp');
    }
};

const clearErrors = (dispatch) => () => {
    dispatch({type: 'clear'})
};

const signUp = (dispatch) => async ({email, password}) => {

    let data = {};

    data.username = email;
    data.password = password;

    if (!api) {
        throw new Error("Api not defined!");
    }

    try {
        const response = await api.post('/user/login', data);

        await AsyncStorage.setItem('token', response.data.access_token);
        await AsyncStorage.setItem('refresh_token', response.data.refresh_token);
        await AsyncStorage.setItem('scope', response.data.scope);

        dispatch({type: 'signin', payload: response.data.access_token});

        navigate('Home');

    } catch (err) {
        dispatch({type: 'error', payload: 'incorrect email or password.'});

        console.log(err.message);

    }
};

const signIn = (dispatch) => async ({email, password}) => {

    let data = {};

    data.username = email;
    data.password = password;

    if (!api) {
        throw new Error("Api not defined!");
    }

    try {
        const response = await api.post('/user/login', data);

        await AsyncStorage.setItem('token', response.data.access_token);
        await AsyncStorage.setItem('refresh_token', response.data.refresh_token);
        await AsyncStorage.setItem('scope', response.data.scope);

        dispatch({type: 'signin', payload: response.data.access_token})

        navigate('Home');

    } catch (err) {
        dispatch({type: 'error', payload: 'incorrect email or password.'});

        console.log(err.message);

    }
};
const signOut = (dispatch) => {
    console.log("signOut");

    return () => {
        // sign out
    };
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {signIn, signOut, signUp, initApi, clearErrors, autoSignIn},
    {token: false, error: false}
);
