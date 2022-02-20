import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Detalhes } from '../../pages/Details/details';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';

const PokemonThumb = (props) => {

    const navigation = useNavigation();
    const number = props.id;
    return (
        <View >
            <TouchableOpacity style={styles.container} onPress={props.onPress}  >
                <Text style={styles.title} >#0{props.id}</Text>

                <Image style={styles.cover} source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + number + '.png' }} />

                <Text style={styles.title}>{props.name}</Text>
                

                <TouchableOpacity style={styles.infosStylesIndex}>
                    <Text style={styles.infos}>Type: {props.type} </Text>
                </TouchableOpacity>

                <AntDesign style={styles.containerButton} name="pluscircle" size={40} color="#ffb800" />

            </TouchableOpacity>

        </View>


    )
}

export default PokemonThumb;
const styles = StyleSheet.create({
    container: {

        marginTop: 30,
        backgroundColor: '#303d64',
        height: 440,
        width: 260,
        elevation: 1,
        borderRadius: 30,
        padding: 2,
        marginRight: 15,
        marginLeft: 10,
        padding: 10,
        alignItems: 'center'

    },
    cover: {
        width: 190,
        height: 190,

    },

    infosStyles: {
        marginTop: 25,
        backgroundColor: '#ffb800',
        width: 100,
        height: 30,
        borderRadius: 100,

        alignItems: 'center'

    },
    infos: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 16,
        marginTop: '4%',
        color: '#000',
        textAlign: 'left'

    },
    containerButton: {

        shadowColor: "#000",
        borderRadius: 30,
        shadowOpacity: 0.1,
        shadowRadius: 60,
        elevation: 10,
        marginTop: 20,

    },
    title: {
        marginTop: 25,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 20,
        color: '#FFF',
        textTransform: 'uppercase'
    },
    infosStylesIndex: {
        marginTop: 25,
        backgroundColor: 'rgba(255, 255, 128, 0.2)',
        width: 150,
        height: 30,
        marginLeft: 10,
        borderRadius: 10,
        alignItems: 'center',


    },
    infos: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 12,
        marginTop: '5%',
        color: '#FFF',
        textAlign: 'left',
        textTransform: 'uppercase'


    },
    
})