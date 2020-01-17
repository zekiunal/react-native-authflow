import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Spacer from "./Spacer";
import {Text} from "react-native-elements";
import {withNavigation} from 'react-navigation';

const Links = ({navigation, text, routeName, onSubmitLanguage}) => {
    return (
        <>
            <TouchableOpacity onPress={() => navigation.navigate({routeName})}>
                <Spacer>
                    <Text style={styles.link}>
                        {text}
                    </Text>
                </Spacer>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onSubmitLanguage('tr')}>
                <Spacer>
                    <Text style={styles.link}>
                        TR
                    </Text>

                </Spacer>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onSubmitLanguage('en')}>
                <Spacer>
                    <Text style={styles.link}>
                        EN
                    </Text>
                </Spacer>
            </TouchableOpacity>
        </>


    );
};

const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
});

export default withNavigation(Links);
