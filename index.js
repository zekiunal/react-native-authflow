import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import {Provider, Context} from './src/context/AuthContext';

const createAuthFlowNavigation = () => {
    return createStackNavigator({
        SignUp: SignUpScreen,
        SignIn: SignInScreen
    });
}

export {Provider, Context}

export default createAuthFlowNavigation;


