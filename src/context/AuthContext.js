import createDataContext from './createDataContext';
import axios from "../api/api";
import AuthFlowConfig from "react-native-authflow/src/helpers/AuthFlowConfig";
import AsyncStorage from '@react-native-community/async-storage';
import {navigate} from "react-native-authflow";

let api = false;

const initApi = () => {
    console.log("initApi");
    api = axios(AuthFlowConfig.getApiConfig());
}

const authReducer = (state, action) => {
    console.log("authReducer");

    switch (action.type) {
        case 'error':
            return {...state, error: action.payload, token: false};
        case 'signup':
            return {...state, token: action.payload, error: false};
        default:
            return state;
    }
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

        dispatch({type: 'signup', payload: response.data.token})

        navigate('Home');

    } catch (err) {
        dispatch({type: 'error', payload: 'Username or password is wrong!'});

        console.log(err.message);

    }
};


const signIn = (dispatch) => {
    console.log("signIn");

    return ({email, password}) => {
        // try to sign in
        // update state
        // reflect error message
    };
};

const signOut = (dispatch) => {
    console.log("signOut");

    return () => {
        // sign out
    };
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {signIn, signOut, signUp, initApi},
    {token: false, error: false}
);
