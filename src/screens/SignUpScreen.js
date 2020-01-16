import React, {useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import Spacer from "../components/Spacer";
import {Input, Button, Text} from "react-native-elements";

const SignUpScreen = ({navigation}) => {
    const {state, signUp} = useContext(AuthContext);
    const [email, setEmail] = useState('zekiunal@gmail.com');
    const [password, setPassword] = useState('123456');

    console.log(state);

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up</Text>
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

            {state.error ? <Text style={styles.error}>{state.error}</Text> : null}

            <Spacer>
                <Button
                    onPress={() => {
                        signUp({email, password})
                    }
                    }
                    title="Sign Up"
                />
            </Spacer>
        </View>

    );
};

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    error: {
        fontSize: 16,
        color: 'red',
        marginLeft: 20,
        marginTop: 10
    }
});

export default SignUpScreen;
