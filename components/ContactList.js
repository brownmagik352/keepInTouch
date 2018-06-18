import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ContactListItem from './ContactListItem';

export default class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosen: []
        }; 
    }

    handleCallPress(name) {
        const chosenNames = this.state.chosen.slice();
        chosenNames.push({key: "Call " + name});
        this.setState({chosen: chosenNames});
    }

    handleTextPress(name) {
        const chosenNames = this.state.chosen.slice();
        chosenNames.push({key: "Text " + name});
        this.setState({chosen: chosenNames});
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data = {this.state.chosen}
                    renderItem={({item}) => <Text>{item.key}</Text>}
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
                                            onCallPress={() => this.handleCallPress(item.key)} 
                                            onTextPress={() => this.handleTextPress(item.key)} 
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