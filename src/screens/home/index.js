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
import remoteConfig from "@react-native-firebase/remote-config";
import crashlytics from "@react-native-firebase/crashlytics";
import database from "@react-native-firebase/database";
import storage from "@react-native-firebase/storage";
import styles from "./styles";
import Section from "../../components/section";
import { ProgressContext } from "../../contexts";
import api from "../../api";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../../routes";
import services from "../../services";

function HomeScreen() {
  const navigation = useNavigation();
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
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Button
          title="Show progress dialog"
          onPress={() => {
            progress.showProgressDialog("Hello world");
            setTimeout(progress.hideProgressDialog, 1000);
          }}
        />
        <Button title="Https request" onPress={getUser} />
        <Button
          title="Change screen"
          onPress={() => navigation.navigate(routes.home)}
        />
        <Button
          title="Get remote config"
          onPress={() =>
            Alert.alert(
              "Response",
              JSON.stringify(remoteConfig().getAll(), null, 2),
            )
          }
        />
        <Button
          title="Crash test"
          onPress={() => crashlytics().log("Crash test")}
        />
        <Button
          title="Check realtime database"
          onPress={() =>
            database()
              .ref()
              .once("value", (snapshot) =>
                Alert.alert(
                  "Realtime database",
                  JSON.stringify(snapshot.val(), null, 2),
                ),
              )
          }
        />
        <Button
          title="Get storage file link"
          onPress={() => {
            storage()
              .ref("foto-test.png")
              .getDownloadURL()
              .then((url) => Alert.alert("Storage", url));
          }}
        />
        <Button
          title="Show notification"
          onPress={() => {
            services.notifications.showNotificacion("Test", "Notification", {
              ok: true,
            });
          }}
        />
        <Button
          title="Get firebase token"
          onPress={() => {
            services.notifications
              .getToken()
              .then((token) => Alert.alert("Firebase token", token));
          }}
        />
        <AntDesign name="stepforward" size={30} />
        <Header />
        <View
          style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white }}>
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
