import React, { useEffect, useState } from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFlipper } from "@react-navigation/devtools";
import SplashScreen from "react-native-splash-screen";

import HomeScreen from "./screens/home";
import { routes } from "./routes";

const Stack = createNativeStackNavigator();

function App() {
  const navigationRef = useNavigationContainerRef();
  const [isSplashScreen, setIsSplashScreen] = useState(true);

  useFlipper(navigationRef);

  useEffect(() => {
    async function initialize() {
      try {
        // Set up or get initial data, for example: get user info or request some permissions
        setIsSplashScreen(false);
      } catch (error) {}
    }
    initialize();
  }, []);

  useEffect(() => {
    if (!isSplashScreen) {
      SplashScreen.hide();
    }
  }, [isSplashScreen]);

  if (isSplashScreen) {
    return null;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={routes.home}>
        <Stack.Screen name={routes.home} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
