import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import ContactListItem from './ContactListItem';

export default class ContactList extends Component {
    render() {
        return (
            <View>
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
                renderItem={({item}) => <ContactListItem name={item.key} />}
                />
            </View>
        )
    }
}