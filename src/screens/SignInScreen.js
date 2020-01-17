import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import Links from "../components/Links";
import {NavigationEvents} from "react-navigation";

const SignInScreen = () => {
    const {state, SignIn, clear, autoSignIn} = useContext(AuthContext);

    useEffect(() => {
        autoSignIn();
    }, []);

    return (
        <View style={styles.container}>

            <NavigationEvents
                onWillFocus={() => {}}
                onDidFocus={() => {}}
                onWillBlur={clear}
                onDidBlur={() => {}}
            />

            <AuthForm
                headerText='Sign In'
                errorMessage={state.error}
                onSubmit={({email, password}) => SignIn({email, password})}
                submitButtonText='Sign In'
            />

            <Links
                text="Dont you have an account? Sign up instead"
                routeName="SignUp"
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
    }
});

export default SignInScreen;
