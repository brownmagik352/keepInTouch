import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Button } from 'react-native';
import ContactListItem from './ContactListItem';
import ActionableContact from './ActionableContact';

export default class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosen: [],
            contactListItemsVisible: false,
            contacts: [
                {name: 'Aaron', number: '123-456-7890'},
                {name: 'Betty', number: '234-567-8901'},
                {name: 'Charlie', number: '345-678-9012'},
                {name: 'Dave', number: '456-789-0123'}
            ]
        }; 
    }

    handlePress(name) {
        const chosenNames = this.state.chosen.slice();
        chosenNames.push(name);
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
                    renderItem={({item}) => <ActionableContact name={item} />}
                    ListEmptyComponent={<Text>No Reminders Set</Text>}
                    keyExtractor={(item, index) => index.toString()}
                />

                <Button title="Show/Hide Contacts" onPress={() => this.toggleContactListVisible()} />

                { this.state.contactListItemsVisible && 
                    <FlatList
                    data={this.state.contacts}
                    renderItem={({item}) => <ContactListItem 
                                                name={item.name} 
                                                onPress={() => this.handlePress(item.name)}
                                            />}
                    
                    keyExtractor={(item, index) => index.toString()}
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