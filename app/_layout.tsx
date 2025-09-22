import { SplashScreen, Stack } from "expo-router";
import {useFonts} from 'expo-font'
import { useEffect } from "react";
import "./globals.css";

export default function RootLayout() {
  const [fontsLoaded,error] = useFonts({
    "QuickSand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "QuickSand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "QuickSand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "QuickSand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),

  });
    useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync(); // 👈 hides splash once fonts are ready
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null; // keep splash visible
  }
  return <Stack screenOptions={{headerShown:false}} />
}
