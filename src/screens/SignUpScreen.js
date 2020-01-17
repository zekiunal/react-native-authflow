import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import Links from "../components/Links";
import {NavigationEvents} from "react-navigation";

const SignUpScreen = () => {
    const {state, signUp, clear, autoSignIn} = useContext(AuthContext);

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
                headerText='Sign Up'
                errorMessage={state.error}
                onSubmit={({email, password}) => signUp({email, password})}
                submitButtonText='Sign Up'
            />

            <Links
                text="Already have an account? Sign in instead"
                routeName="SignIn"
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
