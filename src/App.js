import React from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFlipper } from "@react-navigation/devtools";

import HomeScreen from "./screens/home";
import { routes } from "./routes";

const Stack = createNativeStackNavigator();

function App() {
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

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
