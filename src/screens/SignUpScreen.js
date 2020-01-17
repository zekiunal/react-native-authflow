import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import Links from "../components/Links";

const SignUpScreen = () => {
    const {state, signUp} = useContext(AuthContext);

    return (
        <View style={styles.container}>

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
