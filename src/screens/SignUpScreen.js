import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import Spacer from "../components/Spacer";
import {Input, Button} from "react-native-elements";

const SignUpScreen = ({navigation}) => {
    const {state, signUp} = useContext(AuthContext);
    const [email, setEmail] = useState('zekiunal@gmail.com');
    const [password, setPassword] = useState('123456');

    return (
        <Viev style={styles.container}>
            <Spacer>
                <Text h3>This is SignUpScreen</Text>
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
                    secureTextEntry
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </Spacer>
            <Spacer>
                <Button
                    label="Sign Up"
                    onPress={() => {
                        signUp({email, password})
                    }
                    }
                />
            </Spacer>
        </Viev>

    );
};

SignUpScreen.navigationOptions = () => {
    return {
        header: null
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: red,
        borderWidth: 10,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default SignUpScreen;
