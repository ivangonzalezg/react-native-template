/**
 * @format
 */

import React from "react";
import PropTypes from "prop-types";
import { AppRegistry, LogBox } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";

// TODO: Fix this warn
LogBox.ignoreLogs([
  "No task registered for key ReactNativeFirebaseMessagingHeadlessTask",
]);

function HeadlessCheck({ isHeadless }) {
  if (isHeadless) {
    return null;
  }
  return <App />;
}

HeadlessCheck.propTypes = {
  isHeadless: PropTypes.any,
};

AppRegistry.registerComponent(appName, () => HeadlessCheck);
