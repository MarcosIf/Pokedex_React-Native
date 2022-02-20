import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo';
import Router from './src/router';


export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,

  });
/*
  if (!fontsLoaded) { 
    return <AppLoading />;
  }
*/
 
  return (
    <> 
      <StatusBar style='light' backgroundColor='#283151' translucent={false}></StatusBar>
      <Router/>
    </>
  );
}
 