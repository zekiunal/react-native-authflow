import createDataContext from './createDataContext';
import axios from "../api/api";
import AuthFlowConfig from "../helpers/AuthFlowConfig";
import AsyncStorage from '@react-native-community/async-storage';
import {navigate} from "react-native-easy-navigator";

let api = false;

const initAuthFlow = async (dispatch) => {
    console.log("initAuthFlow");
    api = axios(AuthFlowConfig.getApiConfig());
};

const authReducer = (state, action) => {
    console.log("authReducer", action, state);

    switch (action.type) {
        case 'error':
            return {...state, error: action.payload, token: false};
        case 'signin':
            return {...state, token: action.payload, error: false};
        case 'signOut':
            return {...state, token: action.payload, error: false};
        case 'clear':
            return {...state, error: false};
        default:
            return state;
    }
};

const autoSignIn = (dispatch) => async () => {
    console.log("autoSignIn");

    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({type: 'signin', payload: token});
        navigate(AuthFlowConfig.getConfig().defaultRoute);
    } else {
        navigate('SignIn');
    }
};

const clear = (dispatch) => () => dispatch({type: 'clear'});

const signUp = (dispatch) => async ({email, password}) => {
    console.log("signUp");

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

        navigate(AuthFlowConfig.getConfig().defaultRoute);

    } catch (err) {
        dispatch({type: 'error', payload: 'incorrect email or password.'});

        console.log(err.message);

    }
};

const signIn = (dispatch) => async ({email, password}) => {
    console.log("signIn");

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
        navigate(AuthFlowConfig.getConfig().defaultRoute);
    } catch (err) {
        dispatch({type: 'error', payload: 'incorrect email or password.'});
        console.log(err.message);
    }
};
const signOut = (dispatch) => async () => {
    console.log("signOut")
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signOut', payload: false});
    navigate('SignIn');
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {signIn, signOut, signUp, initAuthFlow, clear, autoSignIn},
    {token: false, error: false}
);
