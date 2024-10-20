import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { StatusBar } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="bottomsheet"
          options={{
            presentation: "formSheet",
            sheetAllowedDetents: [0.5, 0.75, 1],
            sheetGrabberVisible: true,
            unstable_screenStyle: { backgroundColor: "white" },
            sheetCornerRadius: 50,
            headerShown: false,
            headerShadowVisible: false,
            sheetExpandsWhenScrolledToEdge: true,
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar barStyle={"default"} />
    </ThemeProvider>
  );
}
