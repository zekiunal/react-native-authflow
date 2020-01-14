import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

function createAuthFlowNavigation() {
    return createStackNavigator({
        SignIn: SignInScreen,
        SignUp: SignUpScreen
    });
}

export default createAuthFlowNavigation;
