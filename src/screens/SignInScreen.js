import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import Links from "../components/Links";
import {NavigationEvents} from "react-navigation";
import Spacer from "react-native-authflow/src/components/Spacer";
import {LanguageContext} from "../../../../App";

const SignInScreen = (props) => {
    console.log('SignInScreen');

    const {state, signIn, clear, changeLanguage} = useContext(AuthContext);
    
    const language = useContext(LanguageContext)[state.language];

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
                onSubmit={({email, password}) => signIn({email, password})}
                submitButtonText={language.button.signIn}
                emailLabel={language.form.email}
                passwordLabel={language.form.password}
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
