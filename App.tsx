import 'react-native-gesture-handler';
import React from 'react'
import {
  useFonts,
  Inter_700Bold,
  Inter_500Medium,
  Inter_600SemiBold
} from '@expo-google-fonts/inter';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Routes } from '@routes/index';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium, Inter_600SemiBold, Inter_700Bold
  });

  if (!fontsLoaded) {
    return null
  }



  return (
    <SafeAreaProvider>
        <StatusBar
  barStyle='dark-content'
  backgroundColor='transparent'
 />
      <Routes />
    </SafeAreaProvider>
  );
}

