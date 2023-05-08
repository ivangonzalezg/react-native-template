import React from "react";
import PropTypes from "prop-types";
import { View, Text, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import styles from "./styles";

const Section = (props) => {
  const { children, title } = props;
  const isDarkMode = useColorScheme() === "dark";

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          { color: isDarkMode ? Colors.white : Colors.black },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.description,
          { color: isDarkMode ? Colors.light : Colors.dark },
        ]}>
        {children}
      </Text>
    </View>
  );
};

Section.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
