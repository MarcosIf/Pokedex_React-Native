import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Link, useNavigation } from '@react-navigation/native';
import { Montserrat_100Thin, Montserrat_300Light, Montserrat_700Bold, Montserrat_800ExtraBold, Montserrat_900Black } from '@expo-google-fonts/montserrat';


export default function splash() {
    const navigation = useNavigation();
    return (
        <View style={styles.content}>
            <Text style={styles.welcome}>Welcome To</Text>
            <Text style={styles.poke}>Pokedex</Text>
            <Image style={styles.img}
                source={require('../../assets/slpash.png')} />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')} >
                <Text style={styles.acss}>
                    Acess to count
                </Text>

            </TouchableOpacity>

            <Link style={styles.cadas} to={{ screen: 'register' }} >
                Don't have an account? <Text style={styles.regi}>Register</Text>
            </Link>
        </View>
    )

}

const styles = StyleSheet.create({

    content: {

        width: '100%',
        height: '100%',
        backgroundColor: '#283151',

    },
    container: {

        marginTop: 10,
        backgroundColor: '#303d64',
        height: 200,
        width: '95%',
        elevation: 1,
        borderRadius: 80,
        padding: 2,
        marginRight: 15,
        marginLeft: 10,
        marginRight: 2,
        marginBottom: 1,
        alignItems: 'baseline',

    },
    img: {

        width: 430,
        height: 450,
        marginRight: '1%'

    },
    acss: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 20,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.9,
        shadowRadius: 9.11,

    },

    button: {
        width: 350,
        height: 50,
        backgroundColor: '#ffb901',
        borderRadius: 50,
        marginTop: 30,
        alignItems: 'center',
        marginLeft: '6%'
    },
    welcome: {
        fontFamily: 'Montserrat_300Light',
        color: '#fff',
        fontSize: 15,
        marginTop: 29,
        marginLeft: 10
    },
    poke: {
        fontFamily: 'Montserrat_700Bold',
        color: '#ffb901',
        fontSize: 30,
        marginTop: 2,
        marginLeft: 10
    },
    cadas: {
        color: '#FFF',
        fontSize: 18,
        marginLeft: 70,
        marginTop: 10,

    },

    regi: {
        color: '#ffb901',
        fontFamily: 'Montserrat_700ExtraBold',
    },
})