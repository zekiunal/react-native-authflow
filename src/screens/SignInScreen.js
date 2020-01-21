import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import Links from "../components/Links";
import {NavigationEvents} from "react-navigation";
import Spacer from "react-native-authflow/src/components/Spacer";
import {Context as LanguageContext} from "../context/LanguageContext";

import {_} from 'lodash';


const SignInScreen = (props) => {
    console.log('SignInScreen');

    const {state, signIn, clear, changeLanguage, translate} = _.merge({}, useContext(LanguageContext), useContext(AuthContext));

    return (
        <View style={styles.container}>

            <NavigationEvents
                onWillFocus={() => {}}
                onDidFocus={() => {}}
                onWillBlur={clear}
                onDidBlur={() => {}}
            />

            <AuthForm
                headerText={translate('Sign In')}
                errorMessage={state.error}
                onSubmit={({email, password}) => signIn({email, password})}
                submitButtonText={translate('Sign In')}
                emailLabel={translate('E-Mail')}
                passwordLabel={translate('Password')}
            />

            <Links
                text={translate('Dont you have an account? Sign up instead')}
                routeName="SignUp"
                onSubmitLanguage={changeLanguage}
            />

        </View>
    );
};

SignInScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    link: {
        color: 'blue'
    }
});

export default SignInScreen;
