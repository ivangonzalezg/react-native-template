import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  View,
  ActivityIndicator,
  Keyboard,
  Platform,
  BackHandler,
  Text,
} from "react-native";
import styles from "./styles";

export interface ProgressDialogProps {
  label: string;
  visible: boolean;
}

type Size = number | "small" | "large" | undefined;

function ProgressDialog(props: ProgressDialogProps) {
  const { visible, label } = props;

  useEffect(() => {
    if (visible) {
      Keyboard.dismiss();
    }
    const backListener = BackHandler.addEventListener(
      "hardwareBackPress",
      () => visible,
    );
    return () => {
      backListener.remove();
    };
  }, [visible]);

  if (!visible) {
    return null;
  }

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Please wait</Text>
        <View style={styles.row}>
          <ActivityIndicator
            size={Platform.select<Size>({
              android: 45,
              default: "large",
            })}
            color="#398377"
          />
          <Text style={styles.text}>{label || "Loading"}...</Text>
        </View>
      </View>
    </View>
  );
}

ProgressDialog.propTypes = {
  visible: PropTypes.bool.isRequired,
  label: PropTypes.string,
};

ProgressDialog.defaultProps = {
  label: "Loading",
};

export default React.memo(ProgressDialog);
