import React from 'react'
import { useFonts, Inter_700Bold, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { CategoriesScreen, HomeScreen, ServicesScreen } from '@screens'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium, Inter_600SemiBold, Inter_700Bold
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaProvider>
      <ServicesScreen/>
    </SafeAreaProvider>
  );
}

