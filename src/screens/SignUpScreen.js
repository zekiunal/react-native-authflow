import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import Links from "../components/Links";
import {NavigationEvents} from "react-navigation";

const SignUpScreen = (props) => {

    const {state, signUp, clear, autoSignIn, changeLanguage} = useContext(AuthContext);

    const language = props.screenProps.translate[state.language];

    return (
        <View style={styles.container}>

            <NavigationEvents
                onWillFocus={() => {}}
                onDidFocus={() => {}}
                onWillBlur={clear}
                onDidBlur={() => {}}
            />

            <AuthForm
                headerText={language.header.signUp}
                errorMessage={state.error}
                onSubmit={({email, password}) => signUp({email, password})}
                submitButtonText={language.button.signUp}
                emailLabel={language.form.email}
                passwordLabel={language.form.password}
            />

            <Links
                text={language.link.signIn}
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
