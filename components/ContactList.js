import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ContactListItem from './ContactListItem';

export default class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastChosenString: 'no name pressed!',
        }; 
    }

    handleCallPress(name) {
        this.setState({lastChosenString: 'Call ' + name});
    }

    handleTextPress(name) {
        this.setState({lastChosenString: 'Text ' + name});
    }

    render() {
        return (
            <View style={styles.container}>
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
                <Text>{this.state.lastChosenString}</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        paddingTop: 50
    }
});