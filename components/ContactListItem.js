import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class ContactListItem extends Component {

    render() {
        return (
            <View style={styles.singleRow} >
                <Text>{this.props.name}</Text>
                <Button title="Call" onPress={() => this.props.onCallPress()}/>
                <Button title="Text" onPress={() => this.props.onTextPress()}/>
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