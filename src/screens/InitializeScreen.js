import React, {useEffect, useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";

const InitializeScreen = () => {

    const {autoSignIn} = useContext(AuthContext);

    useEffect(() => {
        autoSignIn();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>loading...</Text>
        </View>
    );
};

InitializeScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 9
    }
});

export default InitializeScreen;
