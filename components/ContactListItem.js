import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class ContactListItem extends Component {

    render() {
        return (
            <View style={styles.singleRow} >
                <Text>Name</Text>
                <Button title="Call" />
                <Button title="Text" />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    singleRow : {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
});