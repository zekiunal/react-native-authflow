import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button, Text} from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
    const [email, setEmail] = useState('zekiunal@gmail.com');
    const [password, setPassword] = useState('123456');

    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
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

            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

            <Spacer>
                <Button
                    onPress={() => {
                        onSubmit({email, password})
                    }
                    }
                    title={submitButtonText}
                />
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    error: {
        fontSize: 16,
        color: 'red',
        marginLeft: 20,
        marginTop: 10
    }
});

export default AuthForm;
