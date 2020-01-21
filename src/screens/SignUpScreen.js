import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import {Context as LanguageContext} from "../context/LanguageContext";

import AuthForm from "../components/AuthForm";
import Links from "../components/Links";
import {NavigationEvents} from "react-navigation";

import {_} from 'lodash';


const SignUpScreen = (props) => {
    console.log('SignUpScreen');

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
                headerText={translate('Sign Up')}
                errorMessage={state.error}
                onSubmit={({email, password}) => signUp({email, password})}
                submitButtonText={translate('Sign Up')}
                emailLabel={translate('E-Mail')}
                passwordLabel={translate('Password')}
            />

            <Links
                text={translate('Already have an account? Sign in instead')}
                routeName="SignIn"
                onSubmitLanguage={changeLanguage}
            />

        </View>
    );
};

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});

export default SignUpScreen;
