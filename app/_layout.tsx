import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { StatusBar } from "expo-status-bar";
import { ThemeProvider, DefaultTheme } from "@react-navigation/native";

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
      <StatusBar style='dark' />
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" options={{ title: "Welcome" }} />
        <Stack.Screen name="menu" options={{ title: "Main Menu" }} />
        <Stack.Screen name="maps" options={{ title: "Maps" }} />
        <Stack.Screen name="places" options={{ title: "Places" }} />
        <Stack.Screen name="guide" options={{ title: "Student Guide" }} />
        <Stack.Screen name="faq" options={{ title: "FAQ" }} />
      </Stack>
    </ThemeProvider>
  );
}
