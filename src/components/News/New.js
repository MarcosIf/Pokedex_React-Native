import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Montserrat_100Thin, Montserrat_200ExtraLight, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { Detalhes } from '../../pages/Details/details';

export default function New(props) {

    const navigation = useNavigation();
    const [pokemons, setPokemons] = useState([]);
    const [pokemon, setPokemon] = useState(null);


    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon', {
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

    const name = 1;

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((r) => r.json())
            .then((json) => {
                setPokemon(json);
            });
    }, [name]);

    if (!pokemon) {
        return null;
    }

    return (

        <SafeAreaView>
            <TouchableOpacity onPress={props.onPress}>
                {/* <Text>Types: </Text>
                {pokemon.types.map((item) => (
                    <TouchableOpacity >
                        <Text>
                            {item.type.name}</Text>
                    </TouchableOpacity>

                ))} */}

                <FlatList

                    data={pokemons}
                    keyExtractor={(pokemons) => pokemons.name}
                    contentContainerStyle={{ flexGrow: 2, flexDirection: 'row' }}
                    renderItem={PokemonShow}
                    

                />
                </TouchableOpacity>

        </SafeAreaView>

    )
}


function PokemonShow(item) {

    const { name, url, type, ability } = item.item
    const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
    const img = 'https://cdn.traction.one/pokedex/pokemon/' + pokemonNumber + '.png';
    

    return (
        <View>

            <TouchableOpacity style={styles.container} onPress = {() => item.navigation.navigate('number', {name: pokemonNumber})}>
                <Image
                    style={styles.cover} source={{ uri: img }}
                />
                <Text style={styles.title}>{name}</Text>

                <TouchableOpacity style={styles.infosStyles}>
                    <Text style={styles.infos}>Type:</Text>
                </TouchableOpacity>

                <AntDesign style={styles.containerButton} name="pluscircle" size={40} color="#ffb800" />

            </TouchableOpacity>


        </View >
    )
}

const styles = StyleSheet.create({

    container: {

        marginTop: 60,
        backgroundColor: '#303d64',
        height: 390,
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
    containerButton: {

        shadowColor: "#000",
        borderRadius: 30,
        shadowOpacity: 0.1,
        shadowRadius: 60,
        elevation: 10,
        marginTop: 20,

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

    title: {
        marginTop: 25,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 20,
        color: '#FFF',
        textTransform: 'uppercase'
    },



});