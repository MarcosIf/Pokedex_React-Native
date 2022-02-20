import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { Entypo, MaterialCommunityIcons, Feather,AntDesign } from '@expo/vector-icons';
import ExpandableFloatingAction from 'react-native-expandable-fab';
import {useNavigation } from '@react-navigation/native';



export default function Fab() {

    const navigation = useNavigation();

    return (

        <ExpandableFloatingAction
            mainColor="#ffb800"
            secondaryColor="#ffb800"
            closeIcon={<Feather name="x" size={24} color="black" />}
            openIcon={<MaterialCommunityIcons name="pokeball" size={34} color="black" />}
            menuIcons={[
                {
                    name: 'inviteToGroup',
                    icon: <AntDesign name="logout" size={16} color="black" />,
                    text: <Text style={{ color: '#FFF' }}>Logout</Text>,
                    //onPress: () => navigation.navigate('details'),
                    callback: () => { navigation.navigate('splash')}
                    
                    
                },
                {
                    name: 'Home',
                    icon: <Entypo name="home" size={24} color="black" />,
                    text: <Text style={{ color: '#FFF' }}>Home</Text>,
                    callback: () => { navigation.navigate('home')}
                }
            ]}
        />
    )
}
