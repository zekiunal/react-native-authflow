import React, {useEffect, useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import {LanguageContext} from "../../../../App";
import axios from "react-native-authflow/src/api/api";
import AuthFlowConfig from "react-native-authflow/src/helpers/AuthFlowConfig";
import AsyncStorage from "@react-native-community/async-storage";


const InitializeScreen = (props) => {
    console.log("InitializeScreen");

    const {state, autoSignIn} = useContext(AuthContext);

    const language = useContext(LanguageContext)[state.language];

    useEffect(() => {
        autoSignIn()
    }, []);

    if (state.isReady) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{language.text.loading} {state.language}</Text>
            </View>
        );
    } else {
        return null;
    }
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
