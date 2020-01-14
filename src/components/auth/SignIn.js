import React from 'react';
import {View, StyleSheet} from 'react-native';

const SignIn = ({children}) => {
    return (
        <View style={styles.SignIn}>{children}</View>
    );
};

const styles = StyleSheet.create({
    SignIn: {
        margin: 15
    }
});

export default SignIn;
