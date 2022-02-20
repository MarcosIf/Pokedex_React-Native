import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import Home from './pages/Home/home';

import Detail from './pages/Details/details';
import Pokemons from './pages/Pokemons/pokemons';
import Splash from './pages/Splash/splash';
import Login from './pages/login/login';
import Register from './pages/Register/register';


const Stack = createNativeStackNavigator();

export default function home() {
    return (

        <NavigationContainer  >

            <Stack.Navigator>

                <Stack.Screen name='splash'
                    component={Splash}


                    options={{
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: '#283151',
                            color: '#283151'
                        },
                        title: 'Splash',
                        color: '#283151',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold',
                            color: '#283151',
                            
                            


                        },

                    }}
                />

                <Stack.Screen name='home'
                    component={Home}


                    options={{

                        headerStyle: {
                            backgroundColor: '#283151',
                            color: '#283151'
                        },
                        title: 'Pokedex',
                        color: '#303d64',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold',
                            color: '#ffb901',
                            fontSize: 35,


                        },

                    }}
                />

                <Stack.Screen name='details'
                    component={Detail}

                    options={{
                        headerStyle: {
                            backgroundColor: '#283151',
                            color: '#283151'
                        },
                        title: 'Detalhes',
                        color: '#303d64',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold',
                            color: '#ffb901',
                            fontSize: 25,


                        },
                    }}





                />
                <Stack.Screen name='pokemons'
                    component={Pokemons}


                    options={{

                        headerStyle: {
                            backgroundColor: '#283151',
                            color: '#283151'
                        },
                        title: 'Pokemons',
                        color: '#303d64',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold',
                            color: '#ffb901',
                            fontSize: 35,


                        },
                        headerRight: () => {
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <MaterialCommunityIcons name="pokeball" size={24} color="white" />
                            </TouchableOpacity>
                        }
                    }}
                />

                <Stack.Screen name='login'
                    component={Login}


                    options={{

                        headerStyle: {
                            backgroundColor: '#283151',
                            color: '#283151'
                        },
                        title: 'Login',
                        color: '#303d64',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold',
                            color: '#ffb901',
                            fontSize: 35,


                        },

                    }}
                />

                <Stack.Screen name='register'
                    component={Register}


                    options={{

                        headerStyle: {
                            backgroundColor: '#283151',
                            color: '#283151'
                        },
                        title: 'Register',
                        color: '#303d64',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold',
                            color: '#ffb901',
                            fontSize: 35,


                        },

                    }}
                />



            </Stack.Navigator>


        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

    stackBack: {
        backgroundColor: '#283151',
    }
})