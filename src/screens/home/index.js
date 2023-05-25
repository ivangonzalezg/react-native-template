import React, { useCallback, useContext } from "react";
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from "react-native";
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./styles";
import Section from "../../components/section";
import { ProgressContext } from "../../contexts";
import api from "../../api";

function HomeScreen() {
  const isDarkMode = useColorScheme() === "dark";
  const progress = useContext(ProgressContext);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const getUser = useCallback(async () => {
    progress.showProgressDialog();
    try {
      const { data } = await api().get("/users/ivangonzalezg");
      Alert.alert("Response", JSON.stringify(data, null, 2));
    } catch (_) {}
    progress.hideProgressDialog();
  }, [progress]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Button
        title="Mostrar progress dialog"
        onPress={() => {
          progress.showProgressDialog("Hello world");
          setTimeout(progress.hideProgressDialog, 1000);
        }}
      />
      <Button title="Petición https" onPress={getUser} />
      <AntDesign name="stepforward" size={30} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
