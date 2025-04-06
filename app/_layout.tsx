import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { StatusBar } from "expo-status-bar";
import { ThemeProvider, DarkTheme, DefaultTheme } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Montserrat Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack screenOptions={{headerShown: false}}/>
      <StatusBar style="auto"/>
    </ThemeProvider>
  );
}
