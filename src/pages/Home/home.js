import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { DefaultTheme, useNavigation } from '@react-navigation/native';
import { Entypo, Feather} from '@expo/vector-icons';
import New from '../../components/News/New';
import { Montserrat_100Thin, Montserrat_200ExtraLight, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import PokemonThumb from './PokemonThumb';

import Fab from '../../components/FAB/Fab';

export default function home() {

    const navigation = useNavigation();
    const [state, setState] = React.useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
  

    const [allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

    const getAllPokemons = async () => {
        const res = await fetch(loadMore)
        const data = await res.json()

        setLoadMore(data.next)

        function createPokemonObject(results) {
            results.forEach(async pokemon => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()
                setAllPokemons(currentList => [...currentList, data])
                await allPokemons.sort((a, b) => a.id - b.id)
            })
        }
        createPokemonObject(data.results)
    }

    useEffect(() => {
        getAllPokemons()
    }, [])

    const [search, setSearch] = useState();

    return (

        <View style={styles.content}>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ backgroundColor: '#FFF' }}
            />

            <View style={styles.header}>

                <View style={styles.inputArea}>

                    <TextInput
                        placeholder='Digite o nome do pokemon '
                        style={styles.input}
                        value={search}
                        onChangeText={text => setSearch(text)}

                    />
                    <TouchableOpacity onPress={() => navigation.navigate('details', { itemId: search })}>
                        <Feather

                            name='search' size={24} color='black'

                        />
                    </TouchableOpacity>

                </View>

            </View>



            <Text style={styles.title}>
                News Pokemons
                <Entypo name="new" size={20} color="#ffb800" />
            </Text>


            <View style={styles.contentNew} >

                <ScrollView horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingHorizontal: 12, }}
                >

                    {allPokemons.map((pokemonStats, index) =>

                        <PokemonThumb

                            key={index}
                            id={pokemonStats.id}
                            name={pokemonStats.name}
                            type={pokemonStats.types[0].type.name}
                            onPress={() => navigation.navigate('details', { itemId: pokemonStats.id })}
                        />)}

                </ScrollView>


            </View>
            <TouchableOpacity style={styles.contentPock} >


            </TouchableOpacity>
            <Fab />
        </View>
    );
}

const styles = StyleSheet.create({

    content: {

        width: '100%',
        backgroundColor: '#283151',


    },
    contentPock: {
        backgroundColor: '#283151',
        borderRadius: 200,
        marginTop: '22%'

    },

    header: {

        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 90,


    },
    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#fff',
        elevation: 2,
        paddingHorizontal: 10,
        height: 38,
        borderRadius: 10,
    },
    input: {
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 10,
        fontSize: 12,
        width: '90%',

    },

    title: {
        paddingHorizontal: 15,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 16,
        top: 8,
        color: '#FFF'

    },
    AllPock: {
        color: '#283151',
        fontSize: 16,
        fontFamily: 'Montserrat_700Bold',


    },
    buttonFlutter: {
        marginTop: 10

    }


});
