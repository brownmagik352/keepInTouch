import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Button } from 'react-native';
import ContactListItem from './ContactListItem';
import ActionableContact from './ActionableContact';

export default class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosen: [],
            contactListItemsVisible: false
        }; 
    }

    handlePress(name) {
        const chosenNames = this.state.chosen.slice();
        chosenNames.push({key: name});
        this.setState({chosen: chosenNames});
    }

    toggleContactListVisible() {
        if (this.state.contactListItemsVisible) {
            this.setState({contactListItemsVisible: false});
        } else {
            this.setState({contactListItemsVisible: true});
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data = {this.state.chosen}
                    renderItem={({item}) => <ActionableContact name={item.key} />}
                    ListEmptyComponent={<Text>No Reminders Set</Text>}
                />

                <Button title="Show/Hide Contacts" onPress={() => this.toggleContactListVisible()} />

                { this.state.contactListItemsVisible && 
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
                }
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        paddingTop: 50
    }
});