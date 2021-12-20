import React from 'react';
import { useFonts } from 'expo-font';
import {Poppins_400Regular, Poppins_700Bold} from '@expo-google-fonts/poppins'
import { Routes } from './src/routes';


export default function App() {
  
  const[fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });
  
  // segurar a splash screen

  return (
    <Routes />
  );
}

