import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Spacer from "./Spacer";
import {Text} from "react-native-elements";
import {withNavigation} from 'react-navigation';

const Links = ({navigation, text, routeName}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate({routeName})}>
            <Spacer>
                <Text style={styles.link}>
                    //Already have an account? Sign in instead
                    {text}
                </Text>
            </Spacer>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
});

export default withNavigation(Links);
