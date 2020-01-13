import createDataContext from './createDataContext';
import api from "../api/api";

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const  signUp = dispatch => {
    return async ({email, password}) => {
        try {
            const response = await api.post('/signup', {email, password});
            console.log(response.data);
        } catch (err) {
            console.log(err.message);

        }
    };
};

const signIn = (dispatch) => {
    return ({email, password}) => {
        // try to sign in
        // update state
        // reflect error message
    };
};

const signOut = (dispatch) => {
    return () => {
        // sign out
    };
};

export const {Provider, Context} = createDataContext(
    authReducer(),
    {signIn, signOut, signUp},
    {isSignedIn: false}
);
