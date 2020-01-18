import React, {useEffect, useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";

const InitializeScreen = (props) => {

    const {state, autoSignIn} = useContext(AuthContext);

    const language = props.screenProps.translate[state.language];


    useEffect(() => {
        autoSignIn();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>l{language.text.loading}</Text>
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
        justifyContent: 'center'
    },
    text: {
        fontSize: 9,
        textAlign: 'center'
    }
});

export default InitializeScreen;
