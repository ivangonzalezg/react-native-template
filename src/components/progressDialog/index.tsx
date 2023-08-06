import React, { useEffect } from "react";
import {
  View,
  ActivityIndicator,
  Keyboard,
  Platform,
  BackHandler,
  Text,
} from "react-native";
import styles from "./styles";

export interface IProgressDialog {
  label: string;
  visible: boolean;
}

type Size = number | "small" | "large" | undefined;

const ProgressDialog: React.FC<IProgressDialog> = (props) => {
  const { visible, label = "Loading" } = props;

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
            size={Platform.select<Size>({ android: 45, default: "large" })}
            color="#398377"
          />
          <Text style={styles.text}>{label}...</Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(ProgressDialog);
