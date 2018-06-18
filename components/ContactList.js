import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ContactListItem from './ContactListItem';
import ActionableContact from './ActionableContact';

export default class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosen: []
        }; 
    }

    handlePress(name) {
        const chosenNames = this.state.chosen.slice();
        chosenNames.push({key: name});
        this.setState({chosen: chosenNames});
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data = {this.state.chosen}
                    renderItem={({item}) => <ActionableContact name={item.key} />}
                />

                <FlatList
                data={[
                    {key: 'Devin'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                ]}
                renderItem={({item}) => <ContactListItem 
                                            name={item.key} 
                                            onPress={() => this.handlePress(item.key)}
                                        />}
                />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        paddingTop: 50
    }
});