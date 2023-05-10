import { createContext } from "react";
import constants from "../constants";

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

const stateReducer = (prevState, action) => {
  switch (action.type) {
    case USER:
      return {
        ...prevState,
        user: action.user,
      };
    case JWT:
      return {
        ...prevState,
        jwt: action.jwt,
      };
    case IS_LOGGED_IN:
      if (action.isLoggedIn) {
        return {
          ...prevState,
          isLoggedIn: true,
        };
      }
      return initialState;
    default:
      return prevState;
  }
};

export { initialState, StateContext, stateReducer };
