import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import {Provider, Context} from './src/context/AuthContext';
import AuthFlowConfig from "./src/helpers/AuthFlowConfig";
import {navigate, setNavigator} from "./src/helpers/navigationRef";

const createAuthFlowNavigation = () => {
    return createStackNavigator({
        SignUp: SignUpScreen,
        SignIn: SignInScreen
    });
};

export {Provider, Context, AuthFlowConfig, navigate, setNavigator}

export default createAuthFlowNavigation;


