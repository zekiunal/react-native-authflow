import createDataContext from './createDataContext';
import axios from "../api/api";
import AuthFlowConfig from "react-native-authflow/src/helpers/AuthFlowConfig";

let api = false;

const initApi = () => {
    console.log("initApi");
    api = axios(AuthFlowConfig.getApiConfig());
}

const authReducer = (state, action) => {
    console.log("authReducer");

    switch (action.type) {
        case 'error':
            return {...state, error: action.payload};
        default:
            return state;
    }
};

const  signUp = (dispatch) => {

    return async ({email, password}) => {

        let data = {};

        data.username = email;
        data.password = password;

        if(!api) {
            throw new Error("Api not defined!");
        }

        try {
            const response = await api.post('/user/login', data);
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
            dispatch({type:'error', payload: 'Username or password is wrong!'});
        }
    };
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
