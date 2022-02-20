import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Montserrat_100Thin, Montserrat_200ExtraLight } from '@expo-google-fonts/montserrat';
import { ProgressBar, Colors } from 'react-native-paper';
import Fab from '../../components/FAB/Fab';
import ProgressBarClassic from 'react-native-progress-bar-classic';


export default function details({ route }) {

    const { itemId } = route.params;
    const [pokemon, setPokemon] = useState(null);
    const name = itemId;
    const [idName, setIdname] = useState();



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

    const imgId = pokemon.id;
    const img = 'https://cdn.traction.one/pokedex/pokemon/' + imgId + '.png';


    return (


        <View>

            <View style={styles.content}>

                <View style={styles.container}>
                    <Image style={styles.cover} source={{ uri: img }} />
                </View>

                {pokemon.forms.map((item) => (

                    <Text style={styles.title}>
                        {item.name}</Text>

                ))}

                <View style={styles.infosPokerIndex}>

                    {pokemon.abilities.map((item) => (
                        <TouchableOpacity style={styles.infosStylesIndex}>
                            <Text style={styles.infos}>
                                {item.ability.name}</Text>

                        </TouchableOpacity>

                    ))}
                </View>
                <View style={styles.infosPoker}>


                    <Text style={styles.infosTitle}>Stats: </Text>
                    {pokemon.stats.map((item) => (
                        <View>
                            <Text style={styles.infosStats}>

                                {item.stat.name} :

                                <Text style={styles.infobase}>

                                    <Text>  </Text>{item.base_stat}
                                </Text>

                                <ProgressBar style={styles.progress} progress={item.base_stat} color={Colors.yellow800} />
                                
 
                            </Text>

                        </View>



                    ))}

                </View>
                <Fab />
            </View>
        </View>

    );
}




const styles = StyleSheet.create({

    content: {

        width: '100%',
        height: '100%',
        backgroundColor: '#303d64',
        alignItems: 'center',
    },

    container: {

        marginTop: -80,
        backgroundColor: 'rgba(255, 255, 128, 0.2)',
        height: 380,
        width: '100%',
        position: 'relative',
        borderRadius: 60,

    },
    progress: {
        width: 190,
        height: 6,
        marginLeft: 10


    },
    title: {
        marginTop: 20,
        marginEnd: 10,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 25,
        color: '#FFF',
        textTransform: 'uppercase'

    },
    infosStyles: {
        marginTop: 8,
        backgroundColor: '#ffb800',
        width: 200,
        height: 30,
        borderRadius: 100,
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
    infosStats: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 14,
        marginTop: '2%',
        color: '#FFF',
        textTransform: 'uppercase'

    },
    infosTitle: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        marginTop: '8%',
        color: '#ffb800',
        textAlign: 'left',
        textTransform: 'uppercase'

    },
    infobase: {
        color: '#ffb800',
        marginLeft: 10
    },


    cover: {
        width: 280,
        height: 280,
        position: 'absolute',
        marginTop: 90,
        marginLeft: '16%',
        display: 'flex'

    },
    infosPoker: {
        alignItems: 'baseline',

        flexDirection: 'column'


    },

    infosPokerIndex: {
        alignItems: 'center',
        flexDirection: 'row'

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

});
