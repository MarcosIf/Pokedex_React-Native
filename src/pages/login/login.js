import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Link, useNavigation } from '@react-navigation/native';
import { Montserrat_100Thin, Montserrat_300Light, Montserrat_700Bold, Montserrat_800ExtraBold, Montserrat_900Black } from '@expo-google-fonts/montserrat';
import { DefaultTheme, HelperText, TextInput, Provider as PaperProvider, useTheme } from 'react-native-paper';
import firebase from '../../../fire';


export default function login() {
    
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');
    const { colors } = useTheme();
    const theme = {
        ...DefaultTheme,
        roundness: 2,
        colors: {
            ...DefaultTheme.colors,
            background: '#283151',
            primary: '#ffb901',
            accent: '#FFF',
            text: '#FFF',
            placeholder: '#ffb901'
        },
    };

    function login() {
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then((userCredential) => {

                var user = userCredential.user;
                navigation.navigate('home');

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert('Usuário ou senha inválidos.');

            });

    }

    return (
        <View style={styles.content}>
            <View style={styles.logins}>
                <Image style={styles.img}
                    source={require('../../assets/slpash.png')} />

                <PaperProvider theme={theme}>
                    <TextInput style={styles.inputs}
                        label="Email"
                        onChangeText={email => setEmail(email)}
                        value={email}
                    />
                    <TextInput
                        style={styles.inputs}
                        label="Password"
                        secureTextEntry
                        right={<TextInput.Icon name="eye" />}
                        onChangeText={pass => setPass(pass)}
                        value={pass}


                    />

                    <TouchableOpacity style={styles.button} onPress={() => login()} >
                        <Text style={styles.acss}>
                            Login
                        </Text>
                    </TouchableOpacity>

                </PaperProvider>
            </View>


        </View>
    )

}

const styles = StyleSheet.create({

    content: {

        width: '100%',
        height: '100%',
        backgroundColor: '#283151',
        alignItems: 'center'

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
    img: {
        marginTop: -220,
        width: 250,
        height: 250,
        marginRight: '1%',
        marginLeft: '15%'

    },
    logins: {
        width: 350,
        height: 350,
        marginTop: '50%'
    },

    button: {
        width: 250,
        height: 50,
        backgroundColor: '#ffb901',
        borderRadius: 50,
        marginTop: 80,
        alignItems: 'center',
        marginLeft: '12%'

    },
    inputs: {
        marginTop: 30,
        color: 'red'

    },
   
})