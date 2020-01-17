import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import Links from "../components/Links";
import {NavigationEvents} from "react-navigation";
import Spacer from "react-native-authflow/src/components/Spacer";

const SignInScreen = (props) => {
    const {state, SignIn, clear, autoSignIn, changeLanguage} = useContext(AuthContext);

    const language = props.screenProps.translate[state.language];

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
                headerText={language.header.signIn}
                errorMessage={state.error}
                onSubmit={({email, password}) => SignIn({email, password})}
                submitButtonText={language.button.signIn}
            />
            <Links
                text={language.link.signUp}
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
