import createDataContext from './createDataContext';
import axios from "../api/api";
import AuthFlowConfig from "../helpers/AuthFlowConfig";
import AsyncStorage from '@react-native-community/async-storage';
import {navigate} from "react-native-easy-navigator";

let api = false;

const initApi = async (dispatch) => {
    console.log("initApi");
    api = axios(AuthFlowConfig.getApiConfig());
    const language = await AsyncStorage.getItem('language');
    if (language) {
        dispatch({type: "changeLanguage", payload: language})
    }
};

const authReducer = (state, action) => {
    console.log("authReducer");

    switch (action.type) {
        case 'error':
            return {...state, error: action.payload, token: false};
        case 'signin':
            return {...state, token: action.payload, error: false};
        case 'signOut':
            return {...state, token: action.payload, error: false};
        case 'clear':
            return {...state, error: false};
        case 'changeLanguage':
            if (state.language !== action.payload)
                return {...state, language: action.payload};
            return state;
        default:
            return state;
    }
};

const autoSignIn = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({type: 'signin', payload: token});
        navigate(AuthFlowConfig.getConfig().defautRoute);
    } else {
        navigate('SignIn');
    }
};

const clear = (dispatch) => () => {
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

        navigate(AuthFlowConfig.getConfig().defautRoute);

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

        navigate(AuthFlowConfig.getConfig().defautRoute);

    } catch (err) {
        dispatch({type: 'error', payload: 'incorrect email or password.'});

        console.log(err.message);

    }
};
const signOut = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem('token');
        dispatch({type: 'signOut', payload: false});
        navigate('SignIn');
    };
};

const changeLanguage = (dispatch) => {
    return async (language) => {
        console.log(language);
        await AsyncStorage.setItem('language', language);
        dispatch({type: 'changeLanguage', payload: language})
    };
};


export const {Provider, Context} = createDataContext(
    authReducer,
    {signIn, signOut, signUp, initApi, clear, autoSignIn, changeLanguage},
    {token: false, error: false, language: 'tr'}
);
