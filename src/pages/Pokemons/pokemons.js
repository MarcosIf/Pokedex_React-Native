import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Montserrat_100Thin, Montserrat_200ExtraLight } from '@expo-google-fonts/montserrat';
import { AntDesign } from '@expo/vector-icons';


export default function pokemons() {
  
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1118', {
            method: 'GET',
            headers: {
                'Accept': 'appication/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setPokemons(data.results)
            })


    }, [])

    return (


        <SafeAreaView>
            <FlatList

                data={pokemons}
                keyExtractor={(pokemon) => pokemon.name}
                contentContainerStyle={{ flexGrow: 1 }}
                renderItem={PokemonShow}
            />
        </SafeAreaView>
    );
}

function PokemonShow(item) {
    const { name, url } = item.item

    const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
    const img = 'https://cdn.traction.one/pokedex/pokemon/' + pokemonNumber + '.png'

    return (
        <View style={styles.content}>
            <TouchableOpacity style={styles.container}>
                <Image style={styles.cover} source={{ uri: img }} />
                <Text style={styles.title} >{name}</Text>

                <AntDesign style={styles.containerButton} name="pluscircle" size={40} color="#ffb800" />

            </TouchableOpacity>


        </View>
    )
}


const styles = StyleSheet.create({

    content: {


        width: '100%',
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
    containerButton: {
        marginLeft: 90,
        position: 'relative',
        flex: 2,
        marginTop: -20,
    },
    cover: {
        width: 160,
        height: 160,
        marginLeft: 180,

    },
    infosStyles: {
        marginTop: 100,
        marginLeft: 20,
        position: 'absolute',
        backgroundColor: '#ffb800',
        width: 100,
        height: 30,
        borderRadius: 100,
        alignItems: 'center'

    },
    infos: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 14,
        marginTop: '4%',
        color: '#000',
        textAlign: 'left'

    },
    infosStyles2: {
        marginTop: 140,
        marginLeft: 20,
        position: 'absolute',
        backgroundColor: '#ffb800',
        width: 100,
        height: 30,
        borderRadius: 100,
        alignItems: 'center'

    },

    title: {
        paddingHorizontal: 0,

        position: 'absolute',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#FFF',
        marginLeft: 40,
        marginTop: 80,
        textTransform: 'uppercase'


    },


});
