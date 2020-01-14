import React, {useContext, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Context as AuthContext} from "../../context/AuthContext";
import Spacer from "../Spacer";
import {Button, Input} from "react-native-elements";

const SignUp = () => {
    const {state, signUp} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

const styles = StyleSheet.create({
    SignUp: {
        margin: 15
    }
});

export default SignUp;
