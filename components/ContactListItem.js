import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ContactListItem extends Component {

    render() {
        return (
            <View style={styles.banner} >
                <Text>Hello World 2!</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    banner : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue'
    }
});