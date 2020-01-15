import React, {useContext, useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import Spacer from "../components/Spacer";
import {Input, Button} from "react-native-elements";

const SignUpScreen = () => {
    const {state, signUp} = useContext(AuthContext);
    const [email, setEmail] = useState('zekiunal@gmail.com');
    const [password, setPassword] = useState('123456');

    return (
        <>
            <Spacer>
                <Text>This is SignUpScreen</Text>
            </Spacer>
            <Spacer>
                <Input
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </Spacer>
            <Spacer>
                <Input
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </Spacer>
            <Spacer>
                <Button label="Sign Up" onPress={() => {signUp({email, password})}}/>
            </Spacer>
        </>

    );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
