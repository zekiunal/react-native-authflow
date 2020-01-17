import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import InitializeScreen from './src/screens/InitializeScreen'
import {Provider, Context} from './src/context/AuthContext';
import AuthFlowConfig from "./src/helpers/AuthFlowConfig";

const createAuthFlowNavigation = () => {
    return createStackNavigator({
        Initialize: InitializeScreen,
        SignIn: SignInScreen,
        SignUp: SignUpScreen
    });
};

export {Provider, Context, AuthFlowConfig}

export default createAuthFlowNavigation;


