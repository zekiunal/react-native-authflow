import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import {Provider, Context} from './src/context/AuthContext';
import AuthFlowConfig from "./src/helpers/AuthFlowConfig";

const createAuthFlowNavigation = () => {
    return createStackNavigator({
        SignIn: SignInScreen,
        SignUp: SignUpScreen
    });
};

export {Provider, Context, AuthFlowConfig}

export default createAuthFlowNavigation;


