import createDataContext from './createDataContext';
import axios from "../api/api";
import authFlowConfig from "react-native-authflow/src/helpers/AuthFlowConfig";

let api = false;

const initApi = () => {
    console.log("initApi");
    api = axios(authFlowConfig.getApiConfig());
}

const authReducer = (state, action) => {
    console.log("authReducer");

    switch (action.type) {
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
    {isSignedIn: false}
);
