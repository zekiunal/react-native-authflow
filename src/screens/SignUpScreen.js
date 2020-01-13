import React, {useContext, useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";

const SignUpScreen = () => {
    const {state, signUp} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Input />
        </View>
        <Text>This is SignUpScreen</Text>
    );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
