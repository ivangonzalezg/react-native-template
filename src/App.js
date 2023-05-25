import React, {
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "react-native-splash-screen";

import HomeScreen from "./screens/home";
import { routes } from "./routes";
import { StateContext, initialState, stateReducer } from "./contexts/state";
import {
  ProgressContext,
  initialProgress,
  progressReducer,
} from "./contexts/progress";
import constants from "./constants";
import ProgressDialog from "./components/progressDialog";

const Stack = createNativeStackNavigator();

const { USER, JWT, IS_LOGGED_IN } = constants.state;
const { VISIBLE, HIDDEN } = constants.progress;

function Root() {
  const state = useContext(StateContext);

  if (state.isLoggedIn) {
    return null;
  }

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={routes.home}>
      <Stack.Screen name={routes.home} component={HomeScreen} />
    </Stack.Navigator>
  );
}

function App() {
  const [isSplashScreen, setIsSplashScreen] = useState(true);
  const [state, dispatchState] = useReducer(stateReducer, initialState);
  const [progress, dispatchProgress] = useReducer(
    progressReducer,
    initialProgress,
  );

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

  const stateContext = useMemo(
    () => ({
      updateUser: (user) => dispatchState({ type: USER, user }),
      updateJwt: (jwt) => dispatchState({ type: JWT, jwt }),
      updateIsLoggedIn: (isLoggedIn) =>
        dispatchState({ type: IS_LOGGED_IN, isLoggedIn }),

      ...state,
    }),
    [state],
  );

  const progressContext = useMemo(
    () => ({
      showProgressDialog: (label = "") =>
        dispatchProgress({ type: VISIBLE, label }),
      hideProgressDialog: () => dispatchProgress({ type: HIDDEN }),
    }),
    [],
  );

  if (isSplashScreen) {
    return null;
  }

  return (
    <StateContext.Provider value={stateContext}>
      <ProgressContext.Provider value={progressContext}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
        <ProgressDialog visible={progress.visible} label={progress.label} />
      </ProgressContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
