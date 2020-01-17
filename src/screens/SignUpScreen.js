import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import Spacer from "../components/Spacer";
import {Text} from "react-native-elements";
import AuthForm from "../components/AuthForm";

const SignUpScreen = ({navigation}) => {
    const {state, signUp} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <AuthForm
                headerText='Sign Up'
                errorMessage={state.error}
                onSubmit={({email, password}) => signUp({email, password})}
                submitButtonText='Sign Up'
            />

            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Spacer>
                    <Text style={styles.link}>Already have an account? Sign in instead</Text>
                </Spacer>
            </TouchableOpacity>
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
    },
    link: {
        color: 'blue'
    }
});

export default SignUpScreen;
