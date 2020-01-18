import React, {useEffect, useContext} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";

const InitializeScreen = () => {
    const {autoSignIn} = useContext(AuthContext);

    useEffect(() => {
        autoSignIn();
    }, []);

    return (
        null
    );
};

const styles = StyleSheet.create({});

export default InitializeScreen;
