/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import constants from "@/constants";

const { USER, JWT, IS_LOGGED_IN } = constants.state;

const _user = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  createdAt: "",
  updatedAt: "",
};

const initialState = {
  user: _user,
  jwt: "",
  isLoggedIn: false,
};

const StateContext = createContext({
  updateUser: (user = {}) => {},
  updateJwt: (jwt = "") => {},
  updateIsLoggedIn: (isLoggedIn = false) => {},
  ...initialState,
});

const stateReducer = (prevState: any, action: any) => {
  switch (action.type) {
    case USER:
      return {
        ...prevState,
        user: action.user,
      };
    case JWT:
      AsyncStorage.setItem(JWT, action.jwt);
      return {
        ...prevState,
        jwt: action.jwt,
      };
    case IS_LOGGED_IN:
      if (!action.isLoggedIn) {
        AsyncStorage.removeItem(JWT);
        return initialState;
      }
      return {
        ...prevState,
        isLoggedIn: true,
      };
    default:
      return prevState;
  }
};

export { initialState, StateContext, stateReducer };
